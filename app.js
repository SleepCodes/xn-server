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
const json = require('koa-json')
const onerror = require('koa-onerror')
const logger = require('koa-logger')
const swagger = require('./util/swagger')
const koaBody = require('koa-body')

const index = require('./routes/index')
const users = require('./routes/users')
const other = require('./routes/other')
// const koajwt = require('koa-jwt')

// const SECRET = require('./config').JWT_SECRET

// app.use(koajwt({ secret: SECRET })).unless({ path: [/^login/] })
// middlewares
app.use(swagger.routes(), swagger.allowedMethods())

// error handler
onerror(app)
app.use(
	koaSwagger({
		routePrefix: '/swagger', // host at /swagger instead of default /docs
		swaggerOptions: {
			url: '/swagger.json' // example path to json 其实就是之后swagger-jsdoc生成的文档地址
		}
	})
)

app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(
	koaBody({
		multipart: true,
		formidable: {
			maxFileSize: 5 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
		}
	})
)
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
app.use(other.routes(), other.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
	console.error('server error', err, ctx)
})

module.exports = app
