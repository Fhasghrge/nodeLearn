let fs = require('fs')
fs.readFile('./text1.md', function(erro, data) {
  if(erro) {
    console.log('erro')
  }else{
    console.log(data) // 转换为十六进制
    console.log(data.toString())
  }
})