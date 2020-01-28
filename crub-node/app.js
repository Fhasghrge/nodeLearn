let express = require('express')
let router = require('./router')
let bodyParser = require('body-parser')

let app = express()

app.engine('html', require('express-art-template'))
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

// 必须在路由配置之前完成post配置
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// router(app)
app.use(router) // 把路由挂载到服务器

app.listen(80, () => {
  console.log('running...')
})