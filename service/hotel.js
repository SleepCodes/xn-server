const collection = require('../model/hotel')

async function getAll() {
	let res = await collection.find()
	if (res) {
		return res
	} else {
		return
	}
}

async function like(obj) {
	console.log(obj)
	let param = {}
	if (obj.name) {
		param.name = { $regex: obj.name }
	}
	if (obj.contact) {
		param.contact = { $regex: obj.contact }
	}
	if (obj.tel) {
		param.tel = { $regex: obj.tel }
	}
	let res = await collection.find(param)
	if (res) {
		return res
	} else {
		return
	}
}
module.exports = {
	getAll,
	like
}
