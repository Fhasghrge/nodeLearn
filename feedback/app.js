let http = require('http')
let fs = require('fs')
let template = require('art-template')
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
        let url = req.url
        if(url === '/') {
          fs.readFile('./views/index.html', (err, data) => {
            if(err){
              return res.end('the request is error')
            }
            let html = template.render(data.toString(), {
              comments: comments
            })
            res.end(html)
          })
        }else if (url.indexOf('/public/') === 0){
          fs.readFile('.' + url, (err, data) => {
            if(err){
              return res.end('you are error')
            }else {
              res.end(data)
            }
          })
        }else if(url === '/post'){
          fs.readFile('./views/post.html', (err, data) => {
            if(err) {
              return res.end('no found')
            }else {
              res.end(data)
            }
          })
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