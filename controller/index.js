const city = require('../service/city')
/**
 * 
 * @param {*} ctx 
 */
async function getHotelsByCode (ctx) {
    const req = ctx.request
    let param = req.query
    let res = await city.get(param)

    ctx.body = {
        code: 200,
        message: "查询成功",
        data: res
    }

}

module.exports = {
    getHotelsByCode
}
