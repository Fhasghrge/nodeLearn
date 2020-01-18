let express = require('express')

// 创建服务器应用程序
let app = express()

//公开指定资源目录
app.use('/public', express.static('./public/'))
// 之后就可以访问/public目录里面的所有资源了

//当服务器接收get请求的时候执行回调函数
app.get('/', (req, res) => {
  res.send('hello express!')
})
app.get('/about', (req, res) => {
  res.send('你好，我是张爽')
})
app.get('/shuang', (req, res) => {
  res.send(`
     <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>shuang</title>
      </head>
      <body>
        <h1>zhangShuang</h1>
        <p>发顺丰顺丰隔日如果非人非</p>
      </body>
    </html>
  `)
})
app.listen(3000, () => {
  console.log('runnning...')
})