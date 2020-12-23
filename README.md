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