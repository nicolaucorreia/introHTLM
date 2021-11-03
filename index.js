const express = require('express')
const path = require('path')
const app = express()
 
app.use(express.static('./public'))

 app.get('/', function (req, response) {
  response.sendFile(path.join(_dirname, '/public/index.html'))
}) 
 

app.listen(3000)