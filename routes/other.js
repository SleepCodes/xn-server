const router = require('koa-router')()
const qn = require('../controller/qiniu')

router.get('/getTokenOfQN', qn.token)

module.exports = router
