import React from "react";
import SearchBox from "../components/SearchBox";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-blue-50">
      <SearchBox />
    </main>
  );
};

export default Home;
