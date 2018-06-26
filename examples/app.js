var express = require('express')
var app = express()
var authing = require('express-authing')

app.use(authing({
  clientId: '',
  secret: ''
}))

app.get('/', function (req, res) {
  //use authing

  //req.authing.login
  //req.authing.register
})

app.listen(3000)
