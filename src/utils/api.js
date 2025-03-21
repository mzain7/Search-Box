const API_BASE_URL = "https://frontend-test-api.digitalcreative.cn/";

export const fetchSearchResults = async (query, noThrottling = true) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}?no-throttling=${noThrottling}&search=${query}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
