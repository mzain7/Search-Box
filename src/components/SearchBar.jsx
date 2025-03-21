
function SearchBar
    ({ value, onChange, onKeyDown, ref }) {
    return (
        <div className="relative mb-4">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg
                    className="h-5 w-5 text-gray"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        opacity="0.8"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.9816 9.61047C16.9816 13.1526 13.9625 16.2209 9.9908 16.2209C6.01908 16.2209 3 13.1526 3 9.61047C3 6.06828 6.01908 3 9.9908 3C13.9625 3 16.9816 6.06828 16.9816 9.61047ZM15.3467 17.7247C13.7988 18.6721 11.9614 19.2209 9.9908 19.2209C4.47303 19.2209 0 14.9182 0 9.61047C0 4.30275 4.47303 0 9.9908 0C15.5086 0 19.9816 4.30275 19.9816 9.61047C19.9816 11.9596 19.1054 14.1118 17.6503 15.7813L24.0019 21.9159L21.8441 24L15.3467 17.7247Z"
                        fill="black"
                    />
                </svg>
            </div>
            <input
                ref={ref}
                type="text"
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder="Search what technologies we are using at DC..."
                className="w-full py-3 pl-10 pr-4 bg-gray rounded-lg text-black placeholder-paragraph focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Search technologies"
            />
        </div>
    );
};

export default SearchBar;
