const mongose = require('mongoose')
const Schema = mongose.Schema

// 用户
const userSchema = new Schema(
	{
		username: String, // 用户名
		password: String, // 密码
		authority: Array, // 权限组
		role: String      // 角色
	},
	{ versionKey: false }
)

const db = mongose.model('user', userSchema, 'user')

module.exports = db
