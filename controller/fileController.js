const fileServe = require('../service/file')
const fs = require('fs')
const path = require('path')

// 文件上传 后台接口
async function uploadFiles(ctx) {
	// 单个文件
	let file = ctx.request.files.file
	// console.log(file)

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
	const pro = new Promise((resolve, reject) => {
		var stream = reader.pipe(upStream)

		stream.on('finish', () => {
			resolve(`http://192.168.1.73:3000/images/${name}`)
		})
    })
    
    //TODO 保存成功之后 需要将文件url 存入数据库
	ctx.body = {
		code: 200,
		msg: '上传成功',
		data: await pro
	}
}

module.exports = {
	uploadFiles
}
