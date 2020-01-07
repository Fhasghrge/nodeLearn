let http2 = require('http')
let server2 = http2.createServer()
server2.on('request', (req, res) => {
  console.log('accept')
  res.end('shuang')// simply
})

server2.listen('80', () => {
  console.log('server start successfully')
})