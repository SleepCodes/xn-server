const collection = require('../model/china-dis-data')

// param: {province:'浙江省',city:'嘉兴市'}
async function search(param) {
	let { province, city } = param
	let special = [
		'北京市',
		'天津市',
		'上海市',
		'重庆市',
		'台湾省',
		'香港特别行政区',
		'澳门特别行政区'
	]

	if (special.indexOf(province) > -1) {
		let res = await collection.aggregate([
			{
				$match: {
					name: province
				}
			},
			{
				$project: {
					sub: 1,
					_id: 0
				}
			},
			{
				$unwind: {
					path: '$sub'
				}
			},
			{
				$replaceRoot: {
					newRoot: '$sub'
				}
			},
			{
				$lookup: {
					from: 'hotels',
					localField: 'code',
					foreignField: 'areacode',
					as: 'hotels'
				}
			},
			{
				$unwind: {
					path: '$hotels',
					preserveNullAndEmptyArrays: true
				}
			},
			{
				$project: {
					'hotels._id': 0,
					'hotels.areaCode': 0
				}
			}
		])
		return res
	} else {
		let res = await collection.aggregate([
			{
				$match: {
					name: province
				}
			},
			{
				$project: {
					sub: 1,
					_id: 0
				}
			},
			{
				$unwind: {
					path: '$sub'
				}
			},
			{
				$match: {
					'sub.name': city
				}
			},
			{
				$replaceRoot: {
					newRoot: '$sub'
				}
			},
			{
				$project: {
					sub: 1
				}
			},
			{
				$unwind: {
					path: '$sub'
				}
			},
			{
				$replaceRoot: {
					newRoot: '$sub'
				}
			},
			{
				$lookup: {
					from: 'hotels',
					localField: 'code',
					foreignField: 'areaCode',
					as: 'hotels'
				}
			},
			{
				$unwind: {
					path: '$hotels',
					preserveNullAndEmptyArrays: true
				}
			},
			{
				$project: {
					'hotels._id': 0,
					'hotels.areaCode': 0
				}
			}
		])
		console.log(res)
		return res
	}
}

module.exports = {
	search
}
