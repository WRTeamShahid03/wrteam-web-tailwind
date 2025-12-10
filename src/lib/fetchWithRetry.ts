/**
 * Fetches data with automatic retry logic for robust server-side calls.
 * @param url The URL to fetch.
 * @param options Fetch options (headers, etc.).
 * @param retries Number of retries (default: 3).
 * @param delay Delay between retries in ms (default: 1000).
 */
export async function fetchWithRetry(
    url: string,
    options?: RequestInit,
    retries: number = 3,
    delay: number = 1000
): Promise<Response> {
    let lastError: any;

    for (let i = 0; i <= retries; i++) {
        try {
            const response = await fetch(url, options);

            // If the response is OK, return it immediately
            if (response.ok) {
                return response;
            }

            // If it's a 404, usually we don't want to retry as it's likely permanent
            if (response.status === 404) {
                return response;
            }

            // Throw error for other 4xx/5xx to trigger retry
            throw new Error(`HTTP error! status: ${response.status}`);
        } catch (error) {
            lastError = error;

            // If we have retries left, wait and loop again
            if (i < retries) {
                await new Promise((resolve) => setTimeout(resolve, delay));
            }
        }
    }

    // If all attempts fail, throw the last error
    throw lastError;
}
