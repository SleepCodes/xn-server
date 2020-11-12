const FileModel = require('../model/hotel')
const ObjectId = require('mongoose').Types.ObjectId

// 文件上传之后 添加url 进数据库
async function save(url, _id) {
	let res = await FileModel.updateOne(
		{ _id: ObjectId(_id) },
		{
			$push: {
				images: {
					url: url
				}
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

// 删除记录
async function remove(id, url) {
	console.log(id)
	console.log(url)
	let res = await FileModel.update(
		{ _id: ObjectId(id) },
		{
			$pull: {
				images: {
					url: url
				}
			}
		}
	)

	return res.nModified === 1
}

module.exports = {
	save,
	remove
}
