import React from "react";
import SearchBox from "./components/SearchBox";

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background">
      <SearchBox />
    </main>
  );
};

export default App;
