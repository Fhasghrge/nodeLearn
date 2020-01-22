/*
数据操作文件
对文件进行 增 删 改 查
 */
let fs = require('fs')
//  获取所有学生列表
exports.find = function(callback) {
  fs.readFile('./db.json', (err, data) => { // 这里是相对于执行文件时的路径
    if(err) {
      return callback(err)
    }
    callback(null, JSON.parse(data).students)
  })
}
// 添加保存学生
exports.save = function(student, callback) {
  fs.readFile('./db.json', (err, data) => {
    if (err) {
      callback(err)
    } else {
      let students = JSON.parse(data).students
      student.id = students[students.length - 1].id + 1
      students.push(student)
      let filedata = JSON.stringify({
        students: students
      })
      fs.writeFile('./db.json', filedata, (err, data) => {
        if(err) {
          return callback(err)
        }
        callback(null)
      })
    }
  })
}
// 更新学生
exports.update_by_id = function(student, callback) {
  fs.readFile('./db.json', (err, data) => {
    if(err) {
      return callback(err)
    }
    let students = JSON.parse(data).students
    student.id = parseInt(student.id)
    let stu = students.find( (item) => {
      return item.id === student.id
    })
    // 遍历拷贝对象
    for(let key in student) {
      stu[key] = student[key]
    }
    let filedata = JSON.stringify({
      students: students
    })
    fs.writeFile('./db.json', filedata, (err, data) => {
      if(err) {
        return callback(err)
      }
      callback(null)
    })
  })
}
exports.find_by_id = function(id, callback) {
  fs.readFile('./db.json', (err, data) => {
    if(err) {
      return callback(err)
    }
    let students = JSON.parse(data).students
    let stu = students.find( (item) => {
      return item.id === parseInt(id)
    })
    // 遍历拷贝对象
    callback(null, stu)
  })
}
// 删除学生
exports.delete = function(id, callback) {
  fs.readFile('./db.json', (err, data) => {
    if(err) {
     return callback(err)
    }
    let students = JSON.parse(data).students
    let index = students.findIndex( (item) => {
      return item.id === parseInt(id)
    })
    students.splice(index, 1)
    let filedata = JSON.stringify({
      students: students
    })
    fs.writeFile('./db.json', filedata, (err, data) => {
      if(err) {
        return callback(err)
      }
      callback(null)
    })
  })
}