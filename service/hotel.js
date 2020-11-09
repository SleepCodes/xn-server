const collection = require('../model/hotel')
const ObjectId = require('mongoose').Types.ObjectId
// 默认查询所有酒店
async function getAll() {
	let res = await collection.find()
	if (res) {
		return res
	} else {
		return
	}
}
// 酒店模糊查找
async function like(obj) {
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

// 酒店信息 更新
async function update(param) {
	let res = await collection.updateOne(
		{
			_id: ObjectId(param._id)
		},
		{
			$set: {
				name: param.name,
				address: param.address,
				contact: param.contact,
				tel: param.tel,
				cooperation: param.cooperation,
				account: param.account,
				longitude: param.longitude,
				latitude: param.latitude,
				children: param.children
			}
		}
	)
	console.log('结果', res)

	if (res.nModified === 1) {
		return true
	} else {
		return false
	}
}
module.exports = {
	getAll,
	like,
	update
}
