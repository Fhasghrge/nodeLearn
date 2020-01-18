let express = require('express')

let app = express()

let comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]

app.use('/public/', express.static('./public/'))

//配置使用art-template模板引擎
// 当渲染以art结尾的文件时候使用模板引擎
app.engine('html', require('express-art-template'))

app.get('/', (req, res) => {
  res.render('index.html', {
    comments: comments
  })
})

app.get('/post', (req, res) => {
  res.render('post.html')
})

app.get('/pinglun', (req, res) => {
  let comment = req.query
  let data = new Date()
  let data_year = data.getFullYear()
  let data_mouth = data.getMonth() + 1
  let data_day = data.getDate()
  let data_hour = data.getHours()
  let data_mint = data.getMinutes()
  comment.dateTime = data_hour.toString() + ':' + data_mint + '  ' + 
                                  data_year + '-' + data_mouth + '-' + data_day
  comments.unshift(comment)
  res.redirect('/')
})

app.listen(3000, () => {
  console.log('express is running...')
})