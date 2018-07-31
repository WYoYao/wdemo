
# 创建步骤

### 创建文件夹
> 初始化项目文件安装 webpack

```
mkdir demo && cd demo
npm init -y
npm install webpack --save-dev
npm install webpack-cli
touch webpack.config.js

mkdir src && cd src
touch app.js
```

### 添加入口和出口

```javascript
var path = require("path");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve('./dist'),
        filename: "bundles.js"
    }
}
```

> demo 文件夹下的终端执行

```
./node_modules/.bin/webpack --progress --color --config webpack.config.js
```

> 后面为了方便直接配置到的package.json 中
> 下次再调用直接执行 npm run build

```json
{
    "scripts": {
        "build": "./node_modules/.bin/webpack --progress --color --config webpack.config.js"
    }
}
```

### babel

> 这个时候编译出来的文件还没有转换的成为ES5的文件,转换成为ES5的文件需要用到babel相关的npm

> 下载babel 相关文件,同时我们也下载一个常用的函数库 lodash

```
npm install --save-dev babel-loader babel-core babel-preset-env
npm install babel-plugin-transform-runtime
npm install --save-dev lodash
```

>- babel-loader 用于让 webpack 知道如何运行 babel
>- babel-core 可以看做编译器，这个库知道如何解析代码
>- babel-preset-env 这个库可以根据环境的不同转换代码


> 创建babel 的配置

```
touch .babelrc
```

> 添加 .babelrc 的配置
```
{
    "presets": [
        "env"
    ],
    "plugins": [
        "transform-runtime"
    ]
}
```

> 接下来的编译之后的文件已经将ES6 的文件转换成为ES5的文件了,可以在IE 中执行。

### Image

> 第一步还是下载 对应的loader

>- url-loader 
>- file-loader

> npm install --save-dev url-loader file-loader
