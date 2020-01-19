// 单独开辟一个路由模块
// 用来根据不同的请求方法和请求路径设置具体的函数
let express = require('express')
let router = express.Router() // 获取路由对象
let fs = require('fs')
let Student = require('./student')

router.get('/students', (req, res) => {
  // fs.readFile('./db.json', 'utf8', (err, data) => {
  //   if(err) {
  //     return res.status(500).send("Server Error")
  //   }
  //   res.render('index.html', {
  //     students: JSON.parse(data).students
  //   })
  // })
  Student.find((err, students) => {
    if(err) {
      return res.status(500).send('Server Error')
    }
    res.render('index.html', {
      students: students
    })
  })
})
router.get('/students/new', (req, res) => {
  res.render('new.html')
})
router.post('/students/new', (req, res) => {

})
router.get('/students/edit', (req, res) => {

})
router.post('/students/edit', (req, res) => {

})
router.get('/students/delete', (req, res) => {

})
module.exports = router


