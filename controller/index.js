const jwt = require('koa-jwt')
const db = require('../model/user')
const api = require('../util/JwtToken')

async function login(ctx) {
	const data = ctx.request.query
	if (!data.username || !data.password) {
		ctx.body = {
			code: 200,
			success: false,
			msg: '参数不合法!'
		}
		return
	}

	let res = await db.findOne({
		username: data.username,
		password: data.password
	})
	if (res) {

        
		ctx.body = {
			code: 200,
			success: false,
			msg: '参数不合法!',
			data: res
		}
	}
}
module.exports = {
	login
}
