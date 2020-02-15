const http = require('http')
const url = require('url')

function start(route, handle) {
  function onRequest(request, response) {
    let postData = ''
    const pathname = url.parse(request.url).pathname
    console.log('Request  for ' + pathname + ' received')

    request.setEncoding('utf8') // 设置接收数据编码格式
    request.addListener('data', (postDataChunk) => { // 注入data事件监听器
      postData += postDataChunk
      console.log('Received POST data chunk ' + postDataChunk + ' .')
    })
    request.addListener('end', () => {
      route( handle, pathname, response, postData)
    })
  }

  http.createServer(onRequest).listen(8888)
  console.log('Server has started')
}
exports.start = start