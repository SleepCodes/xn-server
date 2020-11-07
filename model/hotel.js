const mongose = require('mongoose')
const Schema = mongose.Schema

// 酒店信息
const hotelSchema = new Schema(
	{
		name: String,
		address: String,
		contact: String,
		tel: String,
		cooperation: String
	},
	{ versionKey: false }
)

const db = mongose.model('hotel', hotelSchema, 'hotel')

module.exports = db
