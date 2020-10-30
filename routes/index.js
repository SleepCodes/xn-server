const router = require('koa-router')()

router.get('/', async (ctx, next) => {
    ctx.body = 'koa2 string'
})

// router.scan(UserController)

module.exports = router
