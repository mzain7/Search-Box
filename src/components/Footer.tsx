import React from "react";

interface FooterProps {
  loading: boolean;
  error: string | null;
  resultLength: number;
}

const Footer: React.FC<FooterProps> = ({ loading, error, resultLength }) => {
  return (
    <div className="bg-white rounded-br-[20px] rounded-bl-[20px] pt-4 pr-6 pb-4 pl-6 h-[51px] relative">
      <div className="text-paragraph text-left text-sm leading-5 font-medium absolute left-6 top-[15px] flex items-center justify-start">
        {loading ? (
          <p>Searching ...</p>
        ) : error ? (
          <p className="text-error">{error}</p>
        ) : resultLength === 0 ? (
          <p>No results</p>
        ) : (
          <p>{resultLength} results</p>
        )}
      </div>
    </div>
  );
};

export default Footer;
