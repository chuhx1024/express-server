module.exports = (Router) => {
    Router.post('/api/user/login', (req, res) => {
        const { username, password } = req.body
        if (username === '18912345678' && password === '123456') {
            const result = {
                status: 0,
                data: {
                    token: 'admin-token',
                },
            }
            res.send(result)
        } else {
            const result = {
                status: 1,
                msg: '用户名或密码不对',
            }
            res.send(result)
        }
    })
    Router.get('/api/user/info', (req, res) => {
        const { token } = req.query
        console.log(token)
        if (token) {
            res.send({
                status: 0,
                data: {
                    info: {
                        username: 'admin',
                        phone: '15512344321',
                        email: '123@126.com',
                    },
                },
            })
        }
    })
}
