import { useState, useRef, useEffect } from "react";
import { useDebounce } from "use-debounce";
import SearchBar from "./components/SearchBar";
import TagList from "./components/TagList";
import ResultList from "./components/ResultList";
import Footer from "./components/Footer";
import useSearch from "./hooks/useSearch";

const tags = ["Languages", "Build", "Design", "Cloud"];

const App = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);
  const [activeTag, setActiveTag] = useState("");
  const searchInputRef = useRef(null);

  // Custom Hook for fetching search results
  const { results, loading, error, search } = useSearch();
  console.log("Results:", results);

  // Fetch results when debounced query changes
  useEffect(() => {
    if (debouncedQuery) {
      search(debouncedQuery);
    }
  }, [debouncedQuery, search]);

  // Fetch results when tag changes
  useEffect(() => {
    if (activeTag) {
      setQuery(activeTag);
    }
  }, [activeTag]);

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="max-w-2xl w-full mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <SearchBar
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              ref={searchInputRef}
              error={error}
            />

            <TagList tags={tags} activeTag={activeTag} onTagClick={setActiveTag} />
          </div>

          <ResultList results={results} isLoading={loading} error={error} />

          <Footer loading={loading} error={error} resultLength={results.length} />

        </div>
      </div>
    </main>
  );
};

export default App;