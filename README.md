# test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:1208
npm start

# build for production with minification
npm run build

# fix eslint
npm run lint:fix
```
### use proxy
Create config.js in the root directory
config.js sample data:
module.exports = {
    'proxy': {
        'custom_name': { // Maple属性值为代理配置
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
        },
        'custom_name_1': { // Maple属性值为代理配置
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
        },
        'custom_name_n': { // Maple属性值为代理配置
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
Using examples：npm start custom_name

#### pay attention
Please do not add comments to the file（package.json）

##### Contact information
QQ：1330713179
WeChat：HF15243886475
Email：fenghu0913@gmail.com
