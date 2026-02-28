/**
 * Helper to generate a cURL command string
 */
function generateCurlCommand(url: string, options?: RequestInit): string {
    let curl = `curl -X ${options?.method || 'GET'} '${url}'`;

    if (options?.headers) {
        let headersList: [string, string][] = [];
        if (options.headers instanceof Headers) {
            options.headers.forEach((value, key) => headersList.push([key, value]));
        } else if (Array.isArray(options.headers)) {
            headersList = options.headers as [string, string][];
        } else {
            headersList = Object.entries(options.headers as Record<string, string>);
        }

        headersList.forEach(([key, value]) => {
            curl += ` \\\n  -H '${key}: ${value}'`;
        });
    }

    if (options?.body) {
        let bodyStr = '';
        if (typeof options.body === 'string') {
            bodyStr = options.body.replace(/'/g, "'\\''");
        } else {
            try {
                bodyStr = JSON.stringify(options.body).replace(/'/g, "'\\''");
            } catch (e) {
                bodyStr = String(options.body);
            }
        }
        curl += ` \\\n  -d '${bodyStr}'`;
    }

    return curl;
}

/**
 * Write log entry to a local file
 */
async function writeLogToFile(logEntry: string) {
    if (typeof window !== 'undefined') return;

    try {
        const fs = await import('fs/promises');
        const path = await import('path');
        const logFilePath = path.join(process.cwd(), 'api-error.log');

        await fs.appendFile(logFilePath, logEntry + '\n==================================================\n', 'utf8');
    } catch (e) {
        // Silently fail if file system is not accessible (e.g., edge runtime)
    }
}

/**
 * Fetches data with automatic retry logic for robust server-side calls.
 * @param url The URL to fetch.
 * @param options Fetch options (headers, etc.).
 * @param retries Number of retries (default: 1).
 * @param delay Delay between retries in ms (default: 300).
 * @param timeoutMs Timeout per request in ms (default: 3000).
 */
export async function fetchWithRetry(
    url: string,
    options?: RequestInit,
    retries: number = 1,
    delay: number = 300,
    timeoutMs: number = 3000
): Promise<Response> {
    let lastError: any;

    for (let i = 0; i <= retries; i++) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

        const fetchOptions = {
            ...options,
            signal: controller.signal
        };

        const startTime = Date.now();
        try {
            const response = await fetch(url, fetchOptions);
            clearTimeout(timeoutId);

            // If the response is OK, return it immediately
            if (response.ok) {
                if (i > 0) {
                    console.log(`[Fetch Success] ${url} succeeded on retry attempt ${i + 1}`);
                }
                return response;
            }

            // Throw error for 4xx/5xx to trigger retry
            throw new Error(`HTTP error! status: ${response.status}`);
        } catch (error: any) {
            clearTimeout(timeoutId);
            const duration = Date.now() - startTime;
            lastError = error;

            // Determine error type for better logging
            let errorType = "Unknown Error";
            if (error.name === "AbortError") {
                errorType = `Timeout Error (Request took > ${timeoutMs}ms)`;
            } else if (error.message?.includes("HTTP error!")) {
                errorType = error.message;
            } else {
                errorType = `Network/System Error: ${error.message}`;
            }

            // Output structured logs for Vercel
            const logData = {
                level: "ERROR",
                timestamp: new Date().toISOString(),
                module: "fetchWithRetry",
                url: url,
                attempt: i + 1,
                maxRetries: retries,
                durationMs: duration,
                errorType: errorType,
                status: "failed",
                action: i < retries ? "Retrying..." : "Exhausted all retries"
            };

            console.error(JSON.stringify(logData));

            // Write to local file with cURL
            const curlCmd = generateCurlCommand(url, options);
            const fileLogEntry = `[${logData.timestamp}] [Attempt ${logData.attempt}] ERROR: ${logData.errorType}\nDuration: ${logData.durationMs}ms\n\ncURL Command to reproduce:\n${curlCmd}\n`;
            await writeLogToFile(fileLogEntry);

            // If we have retries left, wait and loop again
            if (i < retries) {
                await new Promise((resolve) => setTimeout(resolve, delay));
            }
        }
    }

    // If all attempts fail, throw the last error
    throw lastError;
}
