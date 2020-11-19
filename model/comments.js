const mongose = require('mongoose')
const Schema = mongose.Schema

// 评论
const commentsSchema = new Schema({
    time:String,     // 评论时间
    nickname:String, // 用户昵称
    avatar:String,   // 头像
    comment:String,  // 评论文字
    images:Array,    // 评论图片
    hotel:String,    // 住的酒店
    stars:Number,    // 评论打分 0-5
    checked:Boolean,    // 是否审核结束,是则显示,否 则不显示
    anonymous:Boolean  // 是否匿名评论
}, { versionKey: false })

const db = mongose.model('comments', commentsSchema, 'comments')

module.exports = db
