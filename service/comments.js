const collection = require('../model/comments')

async function add(param) {
	console.log('添加评论: ', param)
	let res = await collection.insertMany(param)
	return res
}

async function getList() {
	let res = await collection.find().sort({ time: -1 })
	return res
}

module.exports = {
	add,
	getList
}
