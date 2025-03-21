/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,ts,jsx,tsx}"];
export const theme = {
    extend: {
        colors: {
            background: "#edf2f7",
            white: "#ffffff",
            lightgray: "#f2f4f8",
            gray: "#999faa",
            black: "#000000",
            purple: "#6833ff",
            darkblue: "#294e80",
            primary: "#6833ff",
            paragraph: "#999faa",
            error: "#ED2E7E",
            primarydark: "#5626DF",
            bluegray: "#dfe6ee",
            lightbluegray: "#d5d9de",
        },
        animation: {
            "pulse-custom": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        },
        keyframes: {
            pulse: {
                "0%, 100%": { opacity: "1" },
                "50%": { opacity: "0.5" },
            },
        },
    },
};
export const plugins = [];
  