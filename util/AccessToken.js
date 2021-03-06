const axios = require('axios')
const { APPID, APPSECRET } = require('../config').WX
const fs = require('fs-extra')

class API {
	constructor() {
		this.appid = APPID
		this.appsecret = APPSECRET
		this.prefix = 'https://api.weixin.qq.com/cgi-bin/'
		// 保存access_token
		this.saveToken = async function (token) {
			await fs.writeFile('access_token.txt', JSON.stringify(token))
		}
		this.getToken = async function () {
			let res = await fs.readFile('../access_token.txt')
			console.log(res)
			return res
		}
	}

	// 从https接口获取access_token
	async getAccessToken() {
		let token = {}
		const response = await axios.get(
			`${this.prefix}token?grant_type=client_credential&appid=${this.appid}&secret=${this.appsecret}`
		)
		// 过期时间，因网络延迟等，将实际过期时间提前20秒，以防止临界点
		const expireTime = Date.now() + (response.data.expires_in - 20) * 1000
		token.accessToken = response.data.access_token
		token.expireTime = expireTime
		await this.saveToken(token)
		return token
	}
	// 读取文件获取token，读取失败重新请求接口
	async ensureAccessToken() {
		let token = {}
		try {
			token = await this.getToken()
		} catch (e) {
			token = await this.getAccessToken()
		}
		if (token && this.isValid(token.accessToken, token.expireTime)) {
			return token
		}
		return this.getAccessToken()
	}

	// 验证access_token是否过期
	isValid(accessToken, expireTime) {
		return !!accessToken && Date.now() < expireTime
	}
}

module.exports = {
	API
}
