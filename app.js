//数据库
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/xiangneng', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Koa = require('koa')
const { koaSwagger } = require('koa2-swagger-ui')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const swagger = require('./util/swagger')
app.use(swagger.routes(), swagger.allowedMethods())

const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)
app.use(
    koaSwagger({
        routePrefix: '/swagger', // host at /swagger instead of default /docs
        swaggerOptions: {
            url: '/swagger.json', // example path to json 其实就是之后swagger-jsdoc生成的文档地址
        },
    }))
// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())


// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app
