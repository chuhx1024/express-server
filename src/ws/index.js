module.exports = (app) => {
    require('express-ws')(app)
    app.ws('/ws', function (ws, req) {
        ws.send('链接成功了')
        ws.on('message', function (msg) {
            console.log('_message')
            console.log(msg)
            ws.send('echo:' + msg)
            setInterval(() => {
                ws.send('fasdfasdfa')
            }, 100)
        })
    })
}
