const mongose = require('mongoose')
const Schema = mongose.Schema

// 酒店信息
const roomSchema = new Schema({
    name: String,     // 酒店名称
    rooms: Array,     // 酒店房间列表
}, { versionKey: false })

const db = mongose.model('hotelRooms', roomSchema, 'hotelRooms')

module.exports = db
