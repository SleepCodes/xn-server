const collection = require('../model/china-dis-data')

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

	let res = await collection.findOne({ name: province })
	if (res) {
		if (special.indexOf(province) > -1) {
			return res
		} else {
			return res.sub.filter((item) => item.name === city)[0]
		}
	} else {
		return
	}
}

module.exports = {
	search
}
