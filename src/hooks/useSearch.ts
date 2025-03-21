import { useState, useCallback } from "react";
import { fetchSearchResults, SearchResult } from "../utils/api";

const useSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await fetchSearchResults(searchTerm);
      setResults(data || []);
    } catch (err: any) {
      if (err.message === "Request timeout") {
        setError("The request time out.");
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
