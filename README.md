# express-authing

## Install

``` shell
$ npm install @authing/express --save
```

## Usage

``` javascript
var express = require('express')
var app = express()
var authing = require('@authing/express')

app.use(authing({
  userPoolId: '',
  secret: ''
}))

app.get('/', function (req, res) {
  //use authing

  //req.authing.login
  //req.authing.register
  //req.authing...
})

app.listen(3000)

```

## More

[Authing Official Docs](https://docs.authing.cn)
