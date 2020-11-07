const mongose = require('mongoose')
const Schema = mongose.Schema

// 酒店信息
const WXhotelSchema = new Schema(
	{
		areaCode: String,
		hotels: Array
	},
	{ versionKey: false }
)

const db = mongose.model('hotels', WXhotelSchema, 'hotels')

module.exports = db
