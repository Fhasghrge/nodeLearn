let http2 = require('http')
let server2 = http2.createServer()
server2.on('request', (req, res) => {
  let url = req.url
  let products = [
    {
      name: 'iphone 11',
      price: 5999
    },
    {
      name: 'HuaWei Mate 30',
      price: 3988
    },
    {
      name: 'Xiao Mi 9',
      price: 3999
    }
  ]
  if(url === '/'){
    res.end('index.page')
  }else if(url === '/login'){
    res.end('login.page')
  }else if(url === '/products'){
    // 响应数据只能是二进制数据或者字符串
    // so useJSON.stringify to transfer arry to string
    res.end(JSON.stringify(products))
  }else{
    res.end('404')
  }
})

server2.listen('80', () => {
  console.log('server start successfully')
})