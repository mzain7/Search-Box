import React, { useState, useRef, useEffect } from "react";
import { useDebounce } from "use-debounce";
import SearchBar from "./SearchBar";
import TagList from "./TagList";
import ResultList from "./ResultList";
import Footer from "./Footer";
import useSearch from "../hooks/useSearch";

// Define tag options
const tags: string[] = ["Languages", "Build", "Design", "Cloud"];

const SearchBox: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery] = useDebounce(query, 300);
  const [activeTag, setActiveTag] = useState<string>("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Custom Hook for fetching search results
  const { results, loading, error, search } = useSearch();
  console.log("Results:", results);

  // Fetch results when debounced query changes
  useEffect(() => {
    if (debouncedQuery) {
      search(debouncedQuery);
    }
  }, [debouncedQuery, search]);

  // Update query when tag changes
  useEffect(() => {
    if (activeTag) {
      setQuery(activeTag);
    }
  }, [activeTag]);

  return (
    <div className="max-w-2xl w-full mx-auto p-[24px] max-h-[600px] ">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
        <SearchBar
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          ref={searchInputRef}
          error={error}
        />
        <TagList tags={tags} activeTag={activeTag} onTagClick={setActiveTag} />

        <ResultList results={results} isLoading={loading} error={error} />

        <Footer loading={loading} error={error} resultLength={results.length} />
      </div>
    </div>
  );
};

export default SearchBox;
