/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./**/*.razor",
        "./**/*.cshtml",
        "./**/*.html",
        "./Pages/**/*.{razor,cshtml,html}",
        "./Components/**/*.{razor,cshtml,html}",
    ], theme: {
        extend: {
            colors: {
            },
        },
    },
    plugins: [],
};
