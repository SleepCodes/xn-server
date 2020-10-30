const city = require('../model/city')

async function get (param) {
    // { "areaCode": code }
    let res = await city.findOne(param)

    if (res) {
        return res
    } else {
    throw ('查询失败!')
    }
}

module.exports = {
    get
}
