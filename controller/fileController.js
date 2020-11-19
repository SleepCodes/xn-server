const fileServe = require('../service/file')
const fs = require('fs')
const path = require('path')

// 文件上传 后台接口
async function uploadFiles(ctx) {
    console.log('图片上传')
	// 单个文件
	let file = ctx.request.files.file
	let { _id } = ctx.request.body
    console.log('文件上传',file)
	// 创建可读流
	const reader = fs.createReadStream(file.path)
	// 文件的后缀名
	let type = file.name.split('.')[1]
	// 文件名
	let name = `${Date.now().toString(16)}.${type}`
	// 文件保存路径
	let filePath = path.join(__dirname, '../public/images/') + name
	// 创建可写流
	const upStream = fs.createWriteStream(filePath)
	// 可读流通过管道写入可写流
	const url = new Promise((resolve, reject) => {
		var stream = reader.pipe(upStream)

		stream.on('finish', () => {
			resolve(`http://192.168.1.73:3000/images/${name}`)
		})
	})
	//保存成功之后 需要将文件url 存入数据库
	let res = await fileServe.save(await url, _id)

	if (res) {
		ctx.body = {
			code: 200,
			msg: '上传并保存成功',
			data: await url,
			success: true
		}
	} else {
		ctx.body = {
			code: 200,
			msg: '上传并保存成功',
			data: await url,
			success: false
		}
	}
}
// 文件删除
async function fileDelete(ctx) {
	let { _id, name, url } = ctx.request.query
	fs.unlink(`./public/images/${name}`, (err) => {
		if (err) {
			console.log(err)
			console.log('文件删除失败')
		}
	})
	// 删除文件 之后 需要从数据库中移除
	let res = await fileServe.remove(_id, url)
	if (res) {
		ctx.body = {
			code: 200,
			msg: '图片删除成功!',
			success: true
		}
	} else {
		ctx.body = {
			code: 200,
			msg: '图片删除失败!',
			success: false
		}
	}
}

module.exports = {
	uploadFiles,
	fileDelete
}
