const RoleModel = require('../models/RoleModel')
const md5 = require('blueimp-md5')
const UserModel = require('../models/UserModel')

module.exports = (Router) => {
    Router.post('/api/user/login', (req, res) => {
        const { username, password } = req.body
        UserModel.findOne({ username, password: md5(password) }).then(user => {
            if (user) {
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

    // 添加角色
    Router.post('/api/user/role/add', (req, res) => {
        const { roleName } = req.body
        RoleModel.create({ roleName }).then(role => {
            res.send({
                status: 0,
                data: { role },
            })
        })
    })

    // 获取角色列表
    Router.get('/api/user/role/list', async (req, res) => {
        const roles = await RoleModel.find()
        res.send({
            status: 0,
            data: roles,
        })
    })
    // 修改角色 添加 menu 权限数组
    Router.post('/api/user/role/update', (req, res) => {
        const role = req.body
        console.log(role)
        role.authTime = Date.now()
        RoleModel.findOneAndUpdate({ _id: role._id }, role).then(oldRole => {
            res.send({
                status: 0,
                data: { ...oldRole },
            })
        })
    })

    // 获取用户列表
    Router.get('/api/user/list', async (req, res) => {
        const users = await UserModel.find()
        res.send({
            status: 0,
            data: users,
        })
    })

    // 添加用户
    Router.post('/api/user/add', (req, res) => {
        const data = req.body
        console.log(data, 90)
    })
}
