const ResultItem = ({ technology }) => {
    return (
        <div className="flex items-start gap-4 p-4 hover:bg-gray transition-colors cursor-pointer group">
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

            <div className="min-w-0 flex justify-between w-full items-center">
                <div className="flex items-start justify-between flex-col">
                    <h3 className="text-lg font-medium text-black truncate">
                        {technology.title}
                    </h3>
                    <p className="text-paragraph text-sm line-clamp-2">
                        {technology.description}
                    </p>
                </div>
                <div className="w-[26px] h-[26px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <path
                            opacity="0.2"
                            d="M24.5694 1.43021C23.6163 0.476795 22.4678 0 21.1251 0H4.87497C3.53221 0 2.3838 0.476795 1.43021 1.43021C0.476795 2.3838 0 3.53215 0 4.87497V21.1249C0 22.4676 0.476795 23.6161 1.43021 24.5697C2.3838 25.5233 3.53221 26 4.87497 26H21.1249C22.4677 26 23.6161 25.5233 24.5693 24.5697C25.5228 23.6161 25.9996 22.4677 25.9996 21.1249V4.87497C25.9996 3.53215 25.5228 2.38362 24.5694 1.43021ZM21.6666 13.5415C21.6666 14.0155 21.4463 14.3482 21.0064 14.5402C20.8599 14.5966 20.7183 14.6248 20.5831 14.6248C20.2787 14.6248 20.0248 14.5174 19.8215 14.3032L17.3841 11.8658L8.34546 20.9049C8.13078 21.1192 7.87709 21.2266 7.58361 21.2266C7.29001 21.2266 7.03608 21.1192 6.8217 20.9049L5.09517 19.1781C4.88072 18.9641 4.77347 18.7097 4.77347 18.4164C4.77347 18.1233 4.88072 17.8693 5.09517 17.655L14.1344 8.61569L11.6968 6.17824C11.3469 5.85097 11.268 5.45623 11.4598 4.99337C11.6515 4.55339 11.9846 4.33313 12.4585 4.33313H20.5832C20.8766 4.33313 21.1305 4.44044 21.3453 4.65495C21.5595 4.86922 21.6667 5.12321 21.6667 5.41662V13.5415H21.6666Z"
                            fill="#999FAA"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ResultItem;
