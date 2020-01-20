// 单独开辟一个路由模块
// 用来根据不同的请求方法和请求路径设置具体的函数
let express = require('express')
let router = express.Router() // 获取路由对象
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
  Student.save(req.body, (err) => {
    if(err){
      return res.status(500).send('Server Error')
    }
    res.redirect('/students')
  })
})
router.get('/students/edit', (req, res) => {
  Student.find_by_id(parseInt(req.query.id), (err, student) => {
    if(err) {
      return res.status(500).send('Server Error')
    }
  res.render('edit.html', {
    student: student
  })
  })
})
router.post('/students/edit', (req, res) => {
  Student.update_by_id(req.body, (err) => {
    if(err) {
      return res.status(500).render('Server Error')
    }
    res.redirect('/students')
  })
})
router.get('/students/delete', (req, res) => {
  Student.delete(req.query.id,  (err) => {
    if(err) {
      res.status(500).render('Server Error')
    }
    res.redirect('/students')
  })
})
module.exports = router


