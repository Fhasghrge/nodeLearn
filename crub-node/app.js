let express = require('express')
let fs = require('fs')
let app = express()
app.engine('html', require('express-art-template'))

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

app.get('/', (req, res) => {
  fs.readFile('./db.json', 'utf8', (err, data) => {
    if(err) {
      return res.status(500).send("Server Error")
    }
    res.render('index.html', {
      students: JSON.parse(data).students
    })
  })
})

app.listen(3000, () => {
  console.log('running...')
})