const mongose = require('mongoose')
const Schema = mongose.Schema

// 区域信息
const citySchema = new Schema({
    areaCode: String,     // 城市区域代码
    name: String,            //名称
    pos: Array,         //坐标数组 [经度,维度]
}, { versionKey: false })

const db = mongose.model('cityCode', citySchema, 'cityCode')

module.exports = db
