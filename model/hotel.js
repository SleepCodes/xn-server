const mongose = require('mongoose')
const Schema = mongose.Schema

// 酒店信息
const hotelSchema = new Schema({
    areaCode: String,     // 城市区域代码
    hotels: Array,         //当前城市所属的酒店数据列表
}, { versionKey: false })

const db = mongose.model('hotels', hotelSchema, 'hotels')

module.exports = db
