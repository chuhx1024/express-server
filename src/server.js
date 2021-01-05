const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Router = require('./routers')
// 声明使用静态中间件
app.use(express.static('public'))
app.use(express.urlencoded()) // 请求体参数是: name=tom&pwd=123
app.use(express.json()) // 请求体参数是json结构: {name: tom, pwd: 123}
app.use('/', Router)

require('./ws')(app)

mongoose.connect('mongodb://localhost/express_server_db', { useNewUrlParser: true }).then(() => {
    console.log('数据库连接成功')
    app.listen(8975, () => {
        console.log('Server is running at http://localhost:8975')
    })
})
