module.exports = {
    proxy: {
        '/api': {
            target: 'http://localhost:3000',
            pathRewrite: { '^/api': '' }
        }
    },
    port: 1105,
    entryApp: './src/main.js'
};