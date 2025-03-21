import { useState, useCallback } from "react";
import { fetchSearchResults } from "../utils/api";

const useSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(async (searchTerm) => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await fetchSearchResults(searchTerm);
      setResults(data || []);
    } catch (err) {
      if (err.message === "Request timeout") {
        setError("Request timeout");
      } else {
        setError("Something wrong happened but this is not your fault :)");
      }
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { query, setQuery, results, loading, error, search };
};

export default useSearch;
