# Express 框架

## 介绍
- Express 是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架，为 Web 和移动应用程序提供一组强大的功能。

## 基本使用 Hello world
- 新建文件后 npm init -y
- 下载 npm i express -S
- 新建 server.js
```js
const express = require('express)
const app = express() 
app.get('/',(req, res) => {
    res.send('Hello world')
})
app.listen(8083, () => {
    console.log('Server is running at http://localhost:8083')
})

```

## 项目添加 ESlint 使用 standard 规则
```sh
# yarn 
yarn add eslint -D

# init
./node_modules/.bin/eslint --init

--->
? How would you like to use ESLint? (Use arrow keys) 
  To check syntax only // 只检查语法
  To check syntax and find problems // 检查语法和发现问题
> To check syntax, find problems, and enforce code style // 检查语法、发现问题并实施代码样式(此项包含 standard 规则)

? What type of modules does your project use? (Use arrow keys) 
  JavaScript modules (import/export) // JavaScript模块
> CommonJS (require/exports) // 因为是 node 项目 所以选此项
  None of these // 其他
```