const router = require('koa-router')()
const api = require('../controller')
const city = require('../controller/cityController')
const hotel = require('../controller/hotelController')

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
 *
 */
// #endregion
router.get('/getCityByCode', city.getCityByCode)
// #region
/**
 * @swagger
 * /getCityByName?province={province}&city={city}: # 接口地址
 *   get: # 请求体
 *     summary: "根据城市名查询城市信息"
 *     description: 查询城市坐标 # 接口信息
 *     tags: [城市模块] # 模块名称
 *     produces:
 *       - application/json # 响应内容类型
 *     parameters: # 请求参数
 *       - name: province
 *         description: 省
 *         in: path # 参数的位置，可能的值有 "query", "header", "path" 或 "cookie" 没有formData，但是我加了不报错
 *         required: true
 *         type: string
 *       - name: city
 *         description: 二级区域名
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
//#region
/**
 * @swagger
 * /getHotels: # 接口地址
 *   post: # 请求体
 *     summary: "根据参数查询酒店"
 *     description: 查询酒店信息 # 接口信息
 *     tags: [酒店模块] # 模块名称
 *     produces:
 *       - application/json # 响应内容类型
 *     parameters: # 请求参数
 *       - name: param
 *         description: 酒店相关参数
 *         in: body # 参数的位置，可能的值有 "query", "header", "path" 或 "cookie" 没有formData，但是我加了不报错
 *         required: true
 *         type: 'object'
 *         schema:
 *           type: 'object'
 *           properties:
 *             name:
 *               type: 'string'
 *             contact:
 *               type: 'string'
 *             tel:
 *               type: 'string'
 *     responses:
 *       '200':
 *         description: Ok
 *         schema: # 返回体说明
 *           type: 'object'
 *           properties:
 *             code:
 *               type: 'number'
 *             data:
 *               type: ''
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
router.post('/getHotels', hotel.getHotelsByParam)

//#region
/**
 * @swagger
 * /updateHotelDetail: # 接口地址
 *   post: # 请求体
 *     summary: "修改酒店信息"
 *     description: 修改酒店信息 # 接口信息
 *     tags: [酒店模块] # 模块名称
 *     produces:
 *       - application/json # 响应内容类型
 *     parameters: # 请求参数
 *       - name: param
 *         description: 酒店相关参数
 *         in: body # 参数的位置，可能的值有 "query", "header", "path" 或 "cookie" 没有formData，但是我加了不报错
 *         required: true
 *         type: 'object'
 *         schema:
 *           type: 'object'
 *           properties:
 *             _id:
 *               type: 'string'
 *             account:
 *               type: 'object'
 *             address:
 *               type: 'string'
 *             children:
 *               type: 'object'
 *             contact:
 *               type: 'string'
 *             cooperation:
 *               type: 'string'
 *             latitude:
 *               type: 'string'
 *             longitude:
 *               type: 'string'
 *             name:
 *               type: 'string'
 *             tel:
 *               type: 'string'
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
router.post('/updateHotelDetail',hotel.update)

module.exports = router
