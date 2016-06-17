const request = require('supertest')
const app = require('../../src/server')

describe('GET /:number', function () {
  it('returns the number converted to english', function (done) {
    request(app)
      .get('/10')
      .expect(200, 'ten', done)
  })

  it('returns 400 for numbers out of range', function (done) {
    request(app)
      .get('/1001')
      .expect(400, done)
  })

  it('returns 400 for non-numbers', function (done) {
    request(app)
      .get('/x')
      .expect(400, done)
  })
})
