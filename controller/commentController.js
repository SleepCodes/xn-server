const server = require('../service/comments')

// 查询评论
async function get(ctx) {
	let res = await server.getList()
	if (res) {
		ctx.body = {
			errCode: 0,
			data: res
		}
	} else {
		ctx.body = {
			errCode: 1,
            data: [],
            msg:'查询失败'
		}
	}
}
// 添加评论
async function add(ctx) {
	console.log(ctx.request.body)
	let param = ctx.request.body
	let res = await server.add(param)
	if (res) {
		ctx.body = {
			errCode: 0,
			msg: '添加成功!'
		}
	} else {
		ctx.body = {
			errCode: 1,
			msg: '添加失败!'
		}
	}
}

module.exports = {
	get,
	add
}
