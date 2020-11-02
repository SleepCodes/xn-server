const mongose = require('mongoose')
const Schema = mongose.Schema

// 区域信息
const citySchema = new Schema(
	{
		name: String,
		code: String,
		pos: Array, //坐标数组 [经度,维度]
		sub: Array
	},
	{ versionKey: false }
)

const db = mongose.model('China-dist-data', citySchema, 'China-dist-data')

module.exports = db
