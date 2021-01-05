module.exports = (app) => {
    const dsproto = require('./proto/dsproto.json')
    const ProtoBufJs = require('protobufjs')
    const root = ProtoBufJs.Root.fromJSON(dsproto)
    const AuditProgress = root.lookup('protos.AuditProgress')
    const infoData = {
        component: 0,
        lastSequence: '123',
        totalSequence: '123',
        logs: ['12', '12'],
    }
    const buffer = AuditProgress.encode(AuditProgress.create(infoData)).finish()
    require('express-ws')(app)
    app.ws('/ws', function (ws, req) {
        ws.on('message', function (msg) {
            console.log(msg)
            setInterval(() => {
                ws.send(buffer)
            }, 1000)
        })
    })
}
