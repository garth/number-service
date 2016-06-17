const numberToEnglish = require('../functions/numberToEnglish')

module.exports = (app) => {
  app.get('/:number', function response (req, res) {
    const number = parseInt(req.params.number, 10)
    try {
      res.send(numberToEnglish(number))
    } catch (exception) {
      res.status(400).send(exception.message)
    }
  })
}
