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
                        token: user._id,
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
            UserModel.findOne({ _id: token }).then(user => {
                if (user) {
                    const result = {
                        status: 0,
                        data: {
                            user,
                        },
                    }
                    res.send(result)
                }
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
    //

    // 获取用户列表
    Router.get('/api/user/list', async (req, res) => {
        const users = await UserModel.find()
        const roles = await RoleModel.find()
        res.send({
            status: 0,
            data: { users, roles },
        })
    })

    // 添加用户
    Router.post('/api/user/add', (req, res) => {
        const data = req.body
        console.log(data, 90)
        const { username, password } = data
        UserModel.findOne({ username }).then(user => {
            if (user) {
                res.send({
                    status: 1,
                    msg: '此用户已存在',
                })
            } else {
                UserModel.create({ ...data, password: md5(password) }).then(user => {
                    res.send({
                        status: 0,
                        data: user,
                    })
                })
            }
        })
    })

    // 删除用户
    Router.post('/api/user/del', async (req, res) => {
        const { userId } = req.body
        console.log(userId)
        await UserModel.deleteOne({ _id: userId })
        res.send({
            status: 0,
        })
    })
}
