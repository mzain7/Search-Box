import React from "react";
import ResultItem from "./ResultItem";
import LoadingIcon from "../assets/Loader.svg";
import NoResultIcon from "../assets/Location Search.svg";
import ErrorIcon from "../assets/Counting Stars.svg";
import { SearchResult } from "../utils/api";


interface ResultListProps {
  results: SearchResult[];
  isLoading: boolean;
  error?: string | null;
}

const ResultList: React.FC<ResultListProps> = ({ results, isLoading, error }) => {
  // Loading state
  if (isLoading) {
    return (
      <div className="py-12 flex flex-col items-center justify-center text-gray bg-white">
        <img src={LoadingIcon} className="h-10 w-10 animate-spin text-gray mb-3" alt="Loading" />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="py-12 flex flex-col items-center justify-center text-gray bg-white">
        <img src={ErrorIcon} className="w-[247px] h-[200px] shrink-0" alt="Error" />
      </div>
    );
  }

  // No results state
  if (results.length === 0) {
    return (
      <div className="py-12 flex flex-col items-center justify-center text-gray bg-white">
        <img src={NoResultIcon} className="w-[247px] h-[192px] shrink-0" alt="No Results" />
      </div>
    );
  }

  // Results state
  return (
    <div className="max-h-80 overflow-auto">
      {results.map((result, index) => (
        <ResultItem key={index} technology={result} />
      ))}
    </div>
  );
};

export default ResultList;
