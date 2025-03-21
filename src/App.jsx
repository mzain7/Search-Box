import { useState, useRef, useEffect, use } from "react";
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
  // const [selectedResultIndex, setSelectedResultIndex] = useState(-1);
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


  // // Keyboard navigation
  // const handleKeyDown = (e) => {
  //   if (e.key === "ArrowDown") {
  //     e.preventDefault();
  //     setSelectedResultIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
  //   } else if (e.key === "ArrowUp") {
  //     e.preventDefault();
  //     setSelectedResultIndex((prev) => (prev > 0 ? prev - 1 : prev));
  //   } else if (e.key === "Enter" && selectedResultIndex >= 0) {
  //     console.log("Selected:", results[selectedResultIndex]);
  //   } else if (e.key === "Escape") {
  //     setSelectedResultIndex(-1);
  //   }
  // };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="max-w-2xl w-full mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <SearchBar
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              // onKeyDown={handleKeyDown}
              ref={searchInputRef}
            />

            <TagList tags={tags} activeTag={activeTag} onTagClick={setActiveTag} />
          </div>

          <ResultList results={results} isLoading={loading} error={error} /* selectedIndex={selectedResultIndex}*/ />

          <Footer loading={loading} error={error} resultLength={results.length} />

        </div>
      </div>
    </main>
  );
};

export default App;



// import { useState, useEffect, useRef, KeyboardEvent } from "react";
// import SearchBar from "./components/SearchBar";
// import TagList from "./components/TagList";
// import ResultList from "./components/ResultList";
// import Footer from "./components/Footer";

// const tags = ["Languages", "Build", "Design", "Cloud"];

// function App() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [activeTag, setActiveTag] = useState("Languages");
//   const [selectedResultIndex, setSelectedResultIndex] = useState(-1);
//   const searchInputRef = useRef(null);

//   const handleSearch = async (term) => {
//     if (!term.trim()) {
//       setResults([]);
//       return;
//     }

//     setIsLoading(true);
//     setError(null);

//     try {
//       // Use no-throttling=true for normal response, false to simulate errors
//       const response = await fetch(
//         `https://frontend-test-api.digitalcreative.cn/?no-throttling=true&search=${term}`
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch results");
//       }

//       const data = await response.json();
//       setResults(data.results || []);
//     } catch (err) {
//       setError("An error occurred while searching. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "ArrowDown") {
//       e.preventDefault();
//       setSelectedResultIndex(prev =>
//         prev < results.length - 1 ? prev + 1 : prev
//       );
//     } else if (e.key === "ArrowUp") {
//       e.preventDefault();
//       setSelectedResultIndex(prev => (prev > 0 ? prev - 1 : prev));
//     } else if (e.key === "Enter" && selectedResultIndex >= 0) {
//       // Handle selection of a result
//       console.log("Selected:", results[selectedResultIndex]);
//     } else if (e.key === "Escape") {
//       setSelectedResultIndex(-1);
//     }
//   };

//   // Debounce search input
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (searchTerm) {
//         handleSearch(searchTerm);
//       }
//     }, 300);

//     return () => clearTimeout(timer);
//   }, [searchTerm]);

//   return (
//     <main className="min-h-screen flex items-center justify-center p-4 bg-background">
//       <div className="search-container">
//         <div className="search-card">
//           <div className="p-4">
//             <SearchBar
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               onKeyDown={handleKeyDown}
//               ref={searchInputRef}
//             />

//             <TagList
//               tags={tags}
//               activeTag={activeTag}
//               onTagClick={setActiveTag}
//             />
//           </div>

//           <ResultList
//             results={results}
//             isLoading={isLoading}
//             error={error}
//             selectedIndex={selectedResultIndex}
//           />

//           {!isLoading && !error && results.length > 0 && (
//             <div className="px-4 py-3 border-t border-lightbluegray text-sm text-gray">
//               {results.length} results
//             </div>
//           )}
//           <Footer />
//         </div>
//       </div>
//     </main>
//   );
// }

// export default App;
