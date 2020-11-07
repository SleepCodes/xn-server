const hotel = require('../service/wx-hotels')
const room = require('../service/room')

// 查询code代码城市 所属酒店列表
async function getHotelList (ctx) {
    const req = ctx.request
    let param = req.query
    let res = await hotel.get(param)

    if (res) {
        ctx.body = {
            code: 200,
            message: "查询成功",
            data: res,
            success: true
        }
    } else {
        ctx.body = {
            code: 200,
            message: "查询失败",
            success: false
        }
    }
}
// 根据酒店 获得房间类型
async function getRooms (ctx) {
    const req = ctx.request
    let { id } = req.query
   
    let res = await room.get(id)

    if (res) {
        ctx.body = {
            code: 200,
            message: "查询成功",
            data: res,
            success: true
        }
    } else {
        ctx.body = {
            code: 200,
            message: "查询失败",
            success: false
        }
    }
}
module.exports = {
    getHotelList,
    getRooms
}
