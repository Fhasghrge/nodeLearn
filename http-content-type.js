let http = require('http')
let fs = require('fs')
let server = http.createServer()
server.on('request', (req, res) => {
  console.log('now is ', req.socket.remoteAddress,  req.socket.remotePort)
  let url = req.url
  if (url === '/html') {
    fs.readFile('./source/index.html', (err, data) => {
      if (err) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('请求文件失败，稍后再试')
      } else {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(data)// no need to transfer the data format
      }
    })
  }else if (url === '/image'){
    fs.readFile('./source/index.jpg', (err, data) => {
      if (err) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('请求文件失败，稍后再试')
      } else {
        res.setHeader('Content-Type', 'image/jpeg') // no need to give the image the charset only for string
        res.end(data)
      }
    })
  } else {
    res.end('404 No Found')
  }
})
server.listen(80, () => {
  console.log('running....')
})