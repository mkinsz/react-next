const withLess = require('@zeit/next-less')

module.exports = withLess({
    cssModules: true,
    devIndicators: {
        autoPrerender: false,
    },
    webpack: config => {
        return config;
    }
})