const city = require('../service/city')
const chinaDistData = require('../service/china-city')

// 根据代码查询城市信息 坐标 名称
async function getCityByCode(ctx) {
	const req = ctx.request
	let param = req.query
	let res = await city.get(param)

	if (res) {
		ctx.body = {
			code: 200,
			message: '查询成功',
			data: res,
			success: true
		}
	} else {
		ctx.body = {
			code: 200,
			message: '查询失败',
			success: false
		}
	}
}
// 根据代码查询城市信息 坐标 名称
async function getCityByName(ctx) {
	const req = ctx.request
	let param = req.query
	let res = await chinaDistData.search(param)

	if (res) {
	    ctx.body = {
	        code: 200,
	        message: "查询成功",
	        data: res,
	        success: true
	    }
	} else {
	    ctx.body = {
	        code: 200,
	        message: "查询失败",
	        success: false
	    }
	}
}
module.exports = {
	getCityByCode,
	getCityByName
}
