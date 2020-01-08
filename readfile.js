let fs = require('fs')
fs.readFile('./text.md', function(erro, data) {
  if(erro) {
    console.log('erro')
  }else{
    console.log(data) // 转换为十六进制
    console.log(data.toString())
  }
})