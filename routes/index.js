const router = require('koa-router')()
// 文件上传
const file = require('../controller/fileController')
//
const login = require('../controller/index')

//#region
/**
 * @swagger
 * /filesUpload: # 接口地址
 *   post: # 请求体
 *     summary: "文件上传"
 *     description: 文件上传 # 接口信息
 *     tags: [酒店模块] # 模块名称
 *     produces:
 *       - application/json # 响应内容类型
 *     parameters: # 请求参数
 *       - name: files
 *         description: 文件
 *         in: formData # 参数的位置，可能的值有 "query", "header", "path" 或 "cookie" 没有formData，但是我加了不报错
 *         required: true
 *         type: string
 *     responses:
 *       '200':
 *         description: Ok
 *         schema: # 返回体说明
 *           type: 'object'
 *           properties:
 *             code:
 *               type: 'number'
 *             data:
 *               type: 'object'
 *               description: 返回数据
 *             message:
 *               type: 'string'
 *               description: 消息提示
 *             success:
 *               type: 'boolean'
 *               description: 请求是否成功的标志
 *       '400':
 *         description: 请求参数错误
 *       '404':
 *         description: not found
 */
//#endregion
router.post('/filesUpload', file.uploadFiles)

//#region
/**
 * @swagger
 * /deleteImg: # 接口地址
 *   delete: # 请求体
 *     summary: "删除文件"
 *     description: 删除上传 # 接口信息
 *     tags: [酒店模块] # 模块名称
 *     produces:
 *       - application/json # 响应内容类型
 *     parameters: # 请求参数
 *       - name: name
 *         description: 文件名
 *         in: body # 参数的位置，可能的值有 "query", "header", "path" 或 "cookie" 没有formData，但是我加了不报错
 *         required: true
 *         type: string
 *     responses:
 *       '200':
 *         description: Ok
 *         schema: # 返回体说明
 *           type: 'object'
 *           properties:
 *             code:
 *               type: 'number'
 *             message:
 *               type: 'string'
 *               description: 消息提示
 *             success:
 *               type: 'boolean'
 *               description: 请求是否成功的标志
 *       '400':
 *         description: 请求参数错误
 *       '404':
 *         description: not found
 */
//#endregion
router.delete('/deleteImg', file.fileDelete)

//#region
/**
 * @swagger
 * /login: # 接口地址
 *   get: # 请求体
 *     summary: "用户登录"
 *     description: '用户登录' # 接口信息
 *     tags: [用户模块] # 模块名称
 *     produces:
 *       - application/json # 响应内容类型
 *     parameters: # 请求参数
 *       - name: 'username'
 *         description: '用户名'
 *         in: query # 参数的位置，可能的值有 "query", "header", "path" 或 "cookie" 没有formData，但是我加了不报错
 *         required: true
 *         type: string
 *       - name: 'password'
 *         description: '密码'
 *         in: query # 参数的位置，可能的值有 "query", "header", "path" 或 "cookie" 没有formData，但是我加了不报错
 *         required: true
 *         type: string
 *     responses:
 *       '200':
 *         description: Ok
 *         schema: # 返回体说明
 *           type: 'object'
 *           properties:
 *             code:
 *               type: 'number'
 *             message:
 *               type: 'string'
 *               description: 消息提示
 *             success:
 *               type: 'boolean'
 *               description: 请求是否成功的标志
 *       '400':
 *         description: 请求参数错误
 *       '404':
 *         description: not found
 */
//#endregion
router.get('/login', login.login)

module.exports = router
