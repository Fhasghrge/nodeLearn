let http = require('http')
let server = http.createServer()
server.on('request', (req, res) => {
  console.log('now is ', req.socket.remoteAddress,  req.socket.remotePort)
  // server use utf-8 to send data defaultly
  // the web use the os' default encoder(China is 'gdk') to encoder the data from server
  let url = req.url
  if(url === '/text'){
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    // text/plain is the normal text, not html tag
    res.end('张爽')
  }else if(url === '/html'){
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // text/plain is the normal text, not html tag
    res.end('<p>爽<a href="">点我</a></p>')
  }else{
    res.end('404 No Found')
  }
  // res.end()
})
server.listen(80, () =>{
  console.log('you successfully')
})