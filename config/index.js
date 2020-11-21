// 腾讯地图 地址转坐标 秘钥
const SECRET = 'XIX8yfCPLM69P39dDkR91onsCLQv5Gok'
// 腾讯地图 使用密钥
const MAPKEY = 'ORSBZ-TFGHU-7VQVV-2IROE-YQN7F-C7F2F'

// 微信小程序模块
const WX = {
	APPID: 'wxe4e5e02d0dab4821',
	APPSECRET: '28f5fdb0b22a8dc55161915138defbe8'
}

// 登录验证 TODO
const JWT_SECRET = 'jwt20201118SC'

// 七牛云 文件存储
const QINIU = {
	AK: 'hpA_T-8maPOx4Rocko7nR2aYD1u7fzMdZRWt17np',
	SK: '85IH6f21iYf45IpAu56HLNd9ur5Nh9l8kQTVMH2i',
	bucket: 'sc-files',
	url: 'qk4eh0com.hd-bkt.clouddn.com'
}

module.exports = {
	MAPKEY,
	SECRET,
	WX,
	JWT_SECRET,
	QINIU
}
