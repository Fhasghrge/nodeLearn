let http = require('http')
let fs = require('fs')
let template  = require('art-template')
// 引用模板字符串的包 
let server = http.createServer()

server.on('request', (req, res) => {
  let url = req.url
  fs.readFile('./art_template.html', (err, data) => {
    if(err) {
      console.log('there is an error')
    }else {
      let jsondta = {
        name: 'zhangShuang',
        age: 19,
        collage: 'uestc'
      }
      let result = template.render(data.toString(), jsondta)
      res.end(result)
    } 
  })
})

server.listen(3000, () => {
  console.log('running...')
})