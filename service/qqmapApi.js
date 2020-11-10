const axios = require('axios')
const md5 = require('js-md5')
const { SECRET, MAPKEY } = require('../config')

async function getLocation(params) {
	// 签名
	let sig = md5('/ws/geocoder/v1?address=' + params + '&key=' + MAPKEY + SECRET)
	// console.log(params)
	return axios.get('https://apis.map.qq.com/ws/geocoder/v1?address=' + encodeURI(params) + '&key=' + MAPKEY + '&sig=' + sig)
}

module.exports = {
	getLocation
}
