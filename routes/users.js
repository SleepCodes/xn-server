const router = require('koa-router')()
const index = require('../controller')

// router.prefix('/users')

// #region
/**
 * @swagger
 * /getHotelsByCode?areaCode={areaCode}: # 接口地址
 *   get: # 请求体
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
 *             data:
 *               type: 'object'
 *               description: 返回数据
 *             message:
 *               type: 'string'
 *               description: 消息提示
 *       '400':
 *         description: 请求参数错误
 *       '404':
 *         description: not found
 */
// #endregion
router.get('/getHotelsByCode', index.getHotelsByCode)

router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})
router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

module.exports = router
