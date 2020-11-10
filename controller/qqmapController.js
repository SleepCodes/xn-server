const serve = require('../service/qqmapApi')

async function getLocationByAddress(ctx) {
	const req = ctx.request
	let { address } = req.query
	// console.log('请求地址: ', address)
	let res = await serve.getLocation(address)
	if (res.data.status === 0) {
        console.log(res.data)
		ctx.body = {
			code: 200,
			msg: '查询成功',
			data: res.data.result.location,
			success: true
		}
	} else {
		ctx.body = {
			code: 200,
			msg: '查询失败',
			data: res.data.message,
			success: true
		}
	}
}

module.exports = {
	getLocationByAddress
}