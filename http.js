let http = require('http')
let server = http.createServer()
// 注册请求事件
// 当客户端发送请求时执行，执行回调函数
server.on('request', function(request, response) {
  console.log('accept')
  console.log('the request url is' + request.url) // relative path

  // respoonse, 输出到响应流
  response.write('hello')
  response.end() // 结束响应，呈递给用户
})

// bind the post and start the server
server.listen(80, function() {
  console.log('server started successfully')
})