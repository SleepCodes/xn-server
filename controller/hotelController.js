const hotel = require('../service/hotel')
const hotelModel = require('../service/hotel')

async function getHotelsByParam(ctx) {
	let { name, contact, tel } = ctx.request.body.params

	if (!name && !contact && !tel) {
		console.log('参数都为空')
		// 无参查询 表示查询全部
		let res = await hotelModel.getAll()
		ctx.body = {
			code: 200,
			msg: '查询成功!',
			success: true,
			data: res
		}
	} else {
		var param = {
			name,
			contact,
			tel
		}
		let res = await hotelModel.like(param)
		ctx.body = {
			code: 200,
			msg: '查询成功!',
			success: true,
			data: res
		}
	}
}

module.exports = {
	getHotelsByParam
}
