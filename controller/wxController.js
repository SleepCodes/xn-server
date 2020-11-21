// 微信模块
const axios = require('axios')
const API = require('../util/AccessToken').API
const { APPID, APPSECRET } = require('../config')

// TODO
async function getAnswer(ctx) {
	// console.log(ctx.request.query)
	let { question } = ctx.request.query

	const api = new API()
	let { accessToken } = await api.ensureAccessToken()
	let customlist = await axios.get(
		`https://api.weixin.qq.com/cgi-bin/customservice/getkflist?access_token=${accessToken}`
	)

	console.log(customlist)
	// 关键词 提取

	// 匹配 知识库

	// 返回 答案

	ctx.body = {
		code: 200,
		msg: '',
		data: '',
		success: true
	}
}
// 获取openID
async function getOpenID(ctx) {
    // console.log()
    const JSCODE = ctx.request.query.code
    console.log(JSCODE)
    return
	let res = await axios.get(
		`https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${APPSECRET}&js_code=${JSCODE}&grant_type=authorization_code`
	)
}

module.exports = {
	getAnswer,
	getOpenID
}
