const mongoose = require('mongoose')

const roleSchema = new mongoose.Schema({
    roleName: { type: String, required: true }, // 角色名称
    createTime: { type: Number, default: Date.now }, // 创建时间
    authName: String, // 授权人
    authTime: Number, // 授权时间
    menus: Array, // 所有有权限操作的菜单的 key 的数组
})

const RoleModel = mongoose.model('roles', roleSchema)

module.exports = RoleModel
