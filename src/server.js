const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('Hello world')
})
app.listen(8975, () => {
    console.log('Server is running at http://localhost:8975')
})
