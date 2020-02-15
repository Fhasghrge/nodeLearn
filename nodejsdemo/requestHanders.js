const exec = require('child_process').exec // 简单实用的非阻塞操作
function start(response) {
  console.log('Request handers Start is called')
  let body = `
  <html >
    <head>
      <meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
    </head>
    <body>
      <form action="/upload" method="post">
        <textarea name="text"  cols="60" rows="20"></textarea>
        <input type="submit" value="Submit text">
      </form>
    </body>
  </html>
  `
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.write(body)
  response.end()
}

function upload(response) {
  console.log('Requet handlers Upload is callled')
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.write('Hello Upload')
  response.end()
}

exports.start = start
exports.upload = upload