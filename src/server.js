const express = require('express')
const app = express()
const Router = require('./routers')
app.use(express.urlencoded()) // 请求体参数是: name=tom&pwd=123
app.use(express.json()) // 请求体参数是json结构: {name: tom, pwd: 123}
app.use('/', Router)

require('./ws')(app)

app.listen(8975, () => {
    console.log('Server is running at http://localhost:8975')
})
