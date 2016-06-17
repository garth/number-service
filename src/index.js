const app = require('./server')
const port = 3000

// serve the app
app.listen(port, '127.0.0.1', () => {
  console.info(' ==> Listening on port %s. Open up http://127.0.0.1:%s/ in your browser.', port, port)
})
