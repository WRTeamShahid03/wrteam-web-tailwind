/**
 * Fetches data with automatic retry logic for robust server-side calls.
 * @param url The URL to fetch.
 * @param options Fetch options (headers, etc.).
 * @param retries Number of retries (default: 3).
 * @param delay Delay between retries in ms (default: 1000).
 * @param timeoutMs Timeout per request in ms (default: 8000).
 */
export async function fetchWithRetry(
    url: string,
    options?: RequestInit,
    retries: number = 3,
    delay: number = 1000,
    timeoutMs: number = 8000
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
            console.error(
                JSON.stringify({
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
                })
            );

            // If we have retries left, wait and loop again
            if (i < retries) {
                await new Promise((resolve) => setTimeout(resolve, delay));
            }
        }
    }

    // If all attempts fail, throw the last error
    throw lastError;
}
