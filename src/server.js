const express = require('express')

const app = express()

// load the controllers
require('./controllers/number')(app)

app.get('/', function (req, res) {
  res.send('number service. Add a number to the end of the URL.')
})

module.exports = app
