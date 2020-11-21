const API = require('../util/qiniuToken').API

// 过期自动请求新的token
async function token(ctx) {
	const api = new API()
	let res = await api.ensureAccessToken()
	ctx.body = {
		errCode: 0,
		data: res
	}
}

module.exports = {
	token
}
