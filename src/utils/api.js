const API_BASE_URL = "https://frontend-test-api.digitalcreative.cn/";

export const fetchSearchResults = async (
  query,
  noThrottling = false,
  timeout = 3000
) => {
  const controller = new AbortController();
  const signal = controller.signal;

  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(
      `${API_BASE_URL}?no-throttling=${noThrottling}&search=${query}`,
      { signal }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Request timeout");
    }
    console.error("Error fetching search results:", error);
    throw error;
  }
};
