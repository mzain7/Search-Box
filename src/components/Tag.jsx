import React from 'react'

function Tag({ label, isActive = false, onClick }) {
    return (
        <button
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors group hover:bg-primaryhover hover:text-white ${isActive
                ? "bg-primary text-white"
                : "bg-gray text-primary "
                }`}
            onClick={onClick}
        >
            <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`transition-colors group-hover:stroke-white ${isActive ? "stroke-white" : "stroke-primary"
                        }`}
                >
                    <path
                        d="M10.272 4.56607C11.1087 4.5326 11.9212 4.85029 12.5133 5.44235L16.8062 9.73528C17.9778 10.9069 17.9778 12.8063 16.8062 13.9779L13.9778 16.8063C12.8062 17.9779 10.9067 17.9779 9.73514 16.8063L5.44221 12.5134C4.85015 11.9214 4.53246 11.1088 4.56592 10.2722L4.7485 5.70787C4.76933 5.18698 5.18683 4.76948 5.70773 4.74864L10.272 4.56607Z"
                        strokeWidth="1.5"
                    />
                    <circle
                        cx="8.83789"
                        cy="8.47278"
                        r="0.625"
                        strokeWidth="1.5"
                    />
                </svg>
            </span>
            {label}
        </button>
    )
}

export default Tag