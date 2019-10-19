module.exports = {
    'proxy': {
        'Maple': { // Maple属性值为代理配置
            'baseUrl': '/',
            'devServer': {
                'proxy': {
                    '/api': {
                        'target': 'http://www.maplehu.com.cn/',
                        'changeOrigin': true,
                        'ws': true,
                        'pathRewrite': {
                            '^/api': ''
                        }
                    }
                }
            }
        }
    }
};