let fs = require('fs')
let template  = require('art-template')
// 引用模板字符串的包 
fs.readFile('./art_template.html', (err, data) => {
  if(err) {
    console.log('there is an error')
  }else {
    let jsondta = {
      name: 'zhangShuang',
      age: 19,
      collage: 'uestc'
    }
    let res = template.render(data.toString(), jsondta)
    console.log(res)
  }
})