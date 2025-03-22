const API_BASE_URL = "https://frontend-test-api.digitalcreative.cn/";

export interface SearchResult {
  title: string;
  description: string;
  image: string;
  url: string;
  category: string;
}

export const fetchSearchResults = async (
  query: string,
  noThrottling: boolean = false,
  timeout: number = 5000
): Promise<SearchResult[]> => {
  const controller = new AbortController();
  const signal = controller.signal;

  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(
      `${API_BASE_URL}?no-throttling=${noThrottling}&search=${encodeURIComponent(
        query
      )}`,
      { signal }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: SearchResult[] = await response.json();
    return data;
  } catch (error: any) {
    if (error.name === "AbortError") {
      throw new Error("Request timeout");
    }
    throw error;
  }
};
