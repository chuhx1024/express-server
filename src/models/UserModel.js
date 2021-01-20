const mongoose = require('mongoose')
const md5 = require('blueimp-md5')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    phone: String,
    email: String,
    createTime: { type: Number, default: Date.now },
    roleId: String,
})

const UserModel = mongoose.model('user', userSchema)

// 初始化默认超级管理员: admin/123456
UserModel.findOne({ username: 'admin' }).then(user => {
    if (!user) {
        UserModel.create({
            username: 'admin',
            password: md5('123456'),
            roleId: 'admin',
        }).then(user => {
            console.log('初始化用户: 用户名: "admin" 密码: "123456"')
        })
    }
})

module.exports = UserModel
