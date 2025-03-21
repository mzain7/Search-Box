
const ResultItem = ({ technology }) => {
    return (
        <div
            className="flex items-start gap-4 p-4 hover:bg-gray transition-colors cursor-pointer"
        >
            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-md overflow-hidden">
                {technology.image ? (
                    <img
                        src={technology.image || "/placeholder.svg"}
                        alt={`${technology.name} image`}
                        className="w-full h-full object-contain"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray text-gray">
                        {technology.name?.charAt(0)}
                    </div>
                )}
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-black truncate">
                        {technology.title}
                    </h3>
                    <svg
                        className="h-5 w-5 text-gray flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </div>
                <p className="text-paragraph text-sm line-clamp-2">
                    {technology.description}
                </p>
            </div>
        </div>
    );
};

export default ResultItem;
