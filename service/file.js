const FileModel = require('../model/hotel')
const ObjectId = require('mongoose').Types.ObjectId

// 文件上传之后 添加url 进数据库
async function save(url, _id) {
	let res = await FileModel.updateOne(
		{ _id: ObjectId(_id) },
		{
			$push: {
				images: url
			}
		}
	)
	if (res.nModified === 1) {
		return true
	} else {
		console.log('修改失败')
		return false
	}
}

module.exports = {
	save
}
