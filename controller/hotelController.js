const hotel = require('../service/wx-hotels')
const hotelModel = require('../service/hotel')

// 酒店列表
async function getHotelsByParam(ctx) {
	let { name, contact, tel } = ctx.request.body.params
    
	if (!name && !contact && !tel) {
		// console.log('参数都为空')
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

// 修改酒店信息
async function update(ctx) { 
	let para = ctx.request.body.params
	let res = await hotelModel.update(para)
	if (res) {
		ctx.body = {
			code: 200,
			msg: '修改成功',
			success: true
		}
	} else {
		ctx.body = {
			code: 200,
			msg: '修改失败',
			success: false  
		}
	}
}

// 查询code代码城市 所属酒店列表
async function getHotelList (ctx) {
    const req = ctx.request
    let param = req.query
    let res = await hotelModel.getListByCode(param)

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
	getHotelsByParam,
    update,
    getHotelList
}
