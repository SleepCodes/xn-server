const collection = require('../model/hotel')

/**
 * 根据三级地名 代码 获得酒店列表
 * @param {Object} param {areaCode:'330483'}
 */
async function get (param) {
    let res = await collection.findOne(param)
    
    if (res) {
        return res
    } else {
        return
    }
}

module.exports = {
    get
}
