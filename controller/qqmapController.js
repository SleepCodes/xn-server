const serve = require('../service/qqmapApi')

async function getLocationByAddress(ctx) {
	let { address } = ctx.request.query
	let res = await serve.getLocation(address)
	if (res.data.status === 0) {
		ctx.body = {
			code: 200,
			msg: '查询成功',
			data: {
				location: res.data.result.location,
				areaCode: res.data.result.ad_info.adcode
			},
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
