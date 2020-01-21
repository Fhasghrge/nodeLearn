const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 连接数据库
mongoose.connect('mongodb://localhost/itcast')

// 设计文档结构
let userSchema = new Schema({
  name: {
    type: String,
    required: true
  },  
  password: {
    type:String,
    required: true
  },
  email: {
    type: String
  }
})

// 把文档结构发布为模型
let User = mongoose.model('User', userSchema)

/**
 * 新增数据
 */

// 创建文档
let admin = new User({
  name: 'zs',
  password: 'shuang',
  email: '4446646@qq.com'
})

// 持久化存储
admin.save( (err, ret) => {
  if(err) {
    console.log("存储失败")
  }else {
    console.log("存储成功")
  }
})

/**
 * 查询数据
 */
User.find({
  name:'zs' // 参数对象是筛选条件
}, (err, res) => {
  if(err) {
    console.log('查询失败！')
  }else {
    console.log(res)
  }
})

/**
 * 删除数据
 */
User.remove({
  name:'zs'
}, (err, ret) => {
  if(err) {
    console.log('删除失败')
  }else {
    console.log('删除成功')
  }
})

/**
 * 修改数据
 */
User.findByIdAndUpdate('5e26eba4b91abf393c8ac468', {
  name: 'zhangshuai'
}, (err, ret) => {
  if(err) {
    console.log('更新失败')
  }else {
    console.log('更新成功')
  }
})