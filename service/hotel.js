const collection = require('../model/hotel')

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
