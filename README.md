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

```
### use proxy
Create _config.js in the root directory
_config.js sample data:
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

##### Contact information
QQ：1330713179
WeChat：HF15243886475
Email：fenghu0913@gmail.com
