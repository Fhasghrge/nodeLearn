let http = require('http')
let fs = require('fs')
let template = require('art-template')
let url = require('url')
var comments = [
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
http
      .createServer((req, res) => {
        let parseObj = url.parse(req.url, true)
        let pathName = parseObj.pathname
        if(pathName === '/') {
          fs.readFile('./views/index.html', (err, data) => {
            if(err){
              return res.end('the request is error')
            }
            let html = template.render(data.toString(), {
              comments: comments
            })
            res.end(html)
          })
        }else if (pathName.indexOf('/public/') === 0){
          fs.readFile('.' + pathName, (err, data) => {
            if(err){
              return res.end('you are error')
            }else {
              res.end(data)
            }
          })
        }else if(pathName === '/post'){
          fs.readFile('./views/post.html', (err, data) => {
            if(err) {
              return res.end('no found')
            }else {
              res.end(data)
            }
          })
        }else if(pathName === '/pinglun') {
          let comment = parseObj.query
          let data = new Date()
          let data_year = data.getFullYear()
          let data_mouth = data.getMonth() + 1
          let data_day = data.getDate()
          let data_hour = data.getHours()
          let data_mint = data.getMinutes()
          comment.dateTime = data_hour.toString() + ':' + data_mint + '  ' + data_year + '-' + data_mouth + '-' + data_day
          comments.unshift(comment)
          res.statusCode = 302 // 状态码告诉客户端进行重定向
          res.setHeader('Location', '/') // 告诉客户端重定向到哪个地址
          res.end()
        }else {
          fs.readFile('./views/404.html', (err, data) => {
            if(err) {
              return res.end('there is an error')
            }else {
              res.end(data)
            }
          })
        }
      })
      .listen(3000, () => {
        console.log('running...')
      })