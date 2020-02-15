const exec = require('child_process').exec // 简单实用的非阻塞操作
function start(response) {
  console.log('Request handers Start is called')
  exec('find /',
    { timeout: 10000, maxBuffer: 20000 * 1024 },
    (err, stdout, stderr) => {
      response.writeHead(200, { 'Content-Type': 'text/plain' })
      response.write(stdout)
      response.end()
    })
}

function upload(response) {
  console.log('Requet handlers Upload is callled')
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.write('Hello Upload')
  response.end()
}

exports.start = start
exports.upload = upload