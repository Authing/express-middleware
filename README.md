# express-authing

## Install

``` shell
$ npm install express-authing --save
```

## Usage

``` javascript
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

```

## More

[Authing Official Docs](https://docs.authing.cn)
