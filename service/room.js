const collection = require('../model/room')
const mongoose = require('mongoose')

async function get (id) {
    let res = await collection.find({ _id: mongoose.Types.ObjectId(id) })
    if (res) {
        return res
    } else {
        return
    }
}

module.exports = {
    get
}
