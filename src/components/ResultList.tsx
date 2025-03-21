import React from "react";
import ResultItem from "./ResultItem";
import LoadingIcon from "../assets/images/Loader.svg";
import NoResultIcon from "../assets/images/Location Search.svg";
import ErrorIcon from "../assets/images/Counting Stars.svg";

import { SearchResult } from "../utils/api";

interface ResultListProps {
  results: SearchResult[];
  isLoading: boolean;
  error?: string | null;
}

const ResultList: React.FC<ResultListProps> = ({
  results,
  isLoading,
  error,
}) => {
  // Loading state
  if (isLoading) {
    return (
      <div className="transition-all duration-300 ease-in-out w-full flex items-center justify-center py-12  bg-white h-[200px]">
        <img
          src={LoadingIcon}
          className="h-10 w-10 animate-spin text-gray mb-3"
          alt="Loading"
        />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="transition-all duration-300 ease-in-out w-full flex flex-col items-center justify-center py-12 bg-white h-[300px]">
        <img
          src={ErrorIcon}
          className="w-[247px] h-[200px] shrink-0"
          alt="Error"
        />
      </div>
    );
  }

  // No results state
  if (results.length === 0) {
    return (
      <div className="transition-all duration-300 ease-in-out w-full flex flex-col items-center justify-center py-12 bg-white h-[300px]">
        <img
          src={NoResultIcon}
          className="w-[247px] h-[192px] shrink-0"
          alt="No Results"
        />
      </div>
    );
  }

  // Results state
  return (
    <div className="duration-300 ease-in-out w-full max-h-[320px] overflow-auto flex flex-col gap-2 py-2 transition-all ">
      {results.map((result, index) => (
        <ResultItem key={index} technology={result} />
      ))}
    </div>
  );
};

export default ResultList;
