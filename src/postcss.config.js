// postcss.config.js
module.exports = {
    plugins: {
        "cssnano": {
            preset: ["default", {
                discardComments: { removeAll: true },
                normalizeWhitespace: true,
                minifyFontValues: true,
                minifySelectors: true,
            }],
        },
    },
};
