// postcss.config.js
module.exports = {
    plugins: {
        "postcss-url": {
            url: "inline",     // inline files as base64
            maxSize: 1000000,  // in KB; this is huge on purpose, effectively "always inline"
            // optional: only inline font files
            // filter: "**/*.{ttf,otf,woff,woff2}"
        },
    },
};