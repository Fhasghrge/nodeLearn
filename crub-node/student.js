/*
数据操作文件
对文件进行 增 删 改 查
 */
let fs = require('fs')
//  获取所有学生列表
exports.find = function(callback) {
  fs.readFile('./db.json', (err, data) => {
    if(err) {
      return callback(err)
    }
    callback(null, JSON.parse(data).students)
  })
}
// 添加保存学生
exports.save = function() {

}
// 更新学生
exports.update = function() {

}
// 删除学生
exports.delete = function() {

}