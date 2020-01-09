let http = require('http')
let fs = require('fs')
let server = http.createServer()
server.on('request', function(request, response) {
  let url = request.url
  if (url === '/source') {
    fs.readFile('./template.html', (err, data) => {
      if (err) {
        return response.end('404')
      }
      fs.readdir('D:/all/MAIN/myCode/webDEMO/pages/node-demo/source', (err, files) => {
        if (err) {
          return response.end('can not find')
        }
        let content = ``
        files.forEach( (item) => {
          content += `
          <h2>${item}</h2>
          `
        })
        data = data.toString()
        data = data.replace('zhang', content)
        response.end(data)
      })
    })
  } else {
    response.end('404 No Found')
  }
})

server.listen(80, function() {
  console.log('running...')
})