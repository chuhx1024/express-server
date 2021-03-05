const express = require('express')
const Router = express.Router()
Router.post('/api/login', (req, res) => {
    const { username, password } = req.body
    console.log(username, password)
    console.log(req.body)
    // console.log(req)
    res.send('Hello World')
})
require('./user')(Router)
require('./echarts')(Router)
module.exports = Router
