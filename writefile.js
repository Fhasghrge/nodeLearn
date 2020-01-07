let fs = require('fs')
fs.writeFile('./shuang.md', 'i am shuang', function(erro) {
  console.log('写入文件成功哦')
})