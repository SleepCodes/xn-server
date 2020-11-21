const mongose = require('mongoose')
const Schema = mongose.Schema

// 用户
const userSchema = new Schema(
	{
        openid:String,      // 微信唯一值
		nickname: String,   // 微信昵称
		avatar: String,     // 头像
		count: Number,      // 抽奖次数 
		rewards: Array      // 奖品列表
	},
	{ versionKey: false }
)

const db = mongose.model('wx_user', userSchema, 'wx_user')

module.exports = db

// 这个是微信小程序抽奖评论时的用户数据库
