const router = require('koa-router')()
const api = require('../controller')
const city = require('../controller/cityController')

// #region
/**
 * @swagger
 * /getCityByCode?areaCode={areaCode}: # 接口地址
 *   get: # 请求体
 *     summary: "根据城市code查询城市信息"
 *     description: 查询城市坐标 # 接口信息
 *     tags: [城市模块] # 模块名称
 *     produces: 
 *       - application/json # 响应内容类型
 *     parameters: # 请求参数
 *       - name: areaCode
 *         description: 城市代码
 *         in: path # 参数的位置，可能的值有 "query", "header", "path" 或 "cookie" 没有formData，但是我加了不报错
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
 *               description: 城市代码
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
// #endregion
router.get('/getCityByCode', city.getCityByCode)
// #region
/**
 * @swagger
 * /getCityByName?name={name}: # 接口地址
 *   get: # 请求体
 *     summary: "根据城市名查询城市信息"
 *     description: 查询城市坐标 # 接口信息
 *     tags: [城市模块] # 模块名称
 *     produces: 
 *       - application/json # 响应内容类型
 *     parameters: # 请求参数
 *       - name: name
 *         description: 城市名称
 *         in: path # 参数的位置，可能的值有 "query", "header", "path" 或 "cookie" 没有formData，但是我加了不报错
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
 *               description: 城市代码
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
// #endregion
router.get('/getCityByName', city.getCityByName)

//#region 
/**
 * @swagger
 * /getHotelList?areaCode={areaCode}: # 接口地址
 *   get: # 请求体
 *     summary: "根据城市code查询城市目录下的酒店列表"
 *     description: 查询城市目录下的酒店列表 # 接口信息
 *     tags: [酒店模块] # 模块名称
 *     produces: 
 *       - application/json # 响应内容类型
 *     parameters: # 请求参数
 *       - name: areaCode
 *         description: 城市代码
 *         in: path # 参数的位置，可能的值有 "query", "header", "path" 或 "cookie" 没有formData，但是我加了不报错
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
router.get('/getHotelList', api.getHotelList)

//#region 
/**
 * @swagger
 * /getRooms?id={id}: # 接口地址
 *   get: # 请求体
 *     summary: "查询酒店客房信息"
 *     description: 查询酒店客房信息 # 接口信息
 *     tags: [酒店模块] # 模块名称
 *     produces: 
 *       - application/json # 响应内容类型
 *     parameters: # 请求参数
 *       - name: id
 *         description: 酒店 ObjectId 的字符串
 *         in: path # 参数的位置，可能的值有 "query", "header", "path" 或 "cookie" 没有formData，但是我加了不报错
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
router.get('/getRooms', api.getRooms)

module.exports = router
