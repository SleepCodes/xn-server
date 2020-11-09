const mongose = require('mongoose')
const Schema = mongose.Schema

// 酒店信息
const hotelSchema = new Schema(
	{
		name: String, // 酒店名称
		address: String, // 地址
		contact: String, // 联系人
		tel: String, // 联系电话
		cooperation: String, // 合作方式
		account: Object, // 后台主账号
		longitude: Number, // 经度
		latitude: Number, // 纬度
		children: Array // 子账号列表
	},
	{ versionKey: false }
)

const db = mongose.model('hotel', hotelSchema, 'hotel')

module.exports = db
