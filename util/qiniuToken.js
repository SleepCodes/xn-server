const qn = require('qiniu')
const { QINIU } = require('../config')
const fs = require('fs-extra')

class API {
	constructor() {
		this.AK = QINIU.AK
		this.SK = QINIU.SK
		// 保存access_token
		this.saveToken = async function (token) {
			await fs.writeFile('qiniu_token.txt', JSON.stringify(token))
        }
        this.getToken = async function(){
            let res = await fs.readFile('../qiniu_token.txt')
            console.log(res)
            return res
        }
	}

	async getAccessToken() {
		let token = {}
		let { bucket, AK, SK } = QINIU
		let mac = new qn.auth.digest.Mac(AK, SK)
		let putPolicy = new qn.rs.PutPolicy({ scope: bucket })
		let UploadToken = putPolicy.uploadToken(mac)

		// // 过期时间，因网络延迟等，将实际过期时间提前20秒，以防止临界点 七牛默认为1小时 因此此处填入 3600秒
		const expireTime = Date.now() + ( 3600 - 20) * 1000
		token.accessToken = UploadToken
		token.expireTime = expireTime
		await this.saveToken(token)
		return UploadToken
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
