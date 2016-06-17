const expect = require('chai').expect
const numberToEnglish = require('../../src/functions/numberToEnglish')

describe('Number to english', function () {
  it('should return "zero" when given 0', function () {
    expect(numberToEnglish(0)).to.equal('zero')
  })

  it('should return "one" when given 1', function () {
    expect(numberToEnglish(1)).to.equal('one')
  })

  it('should return "one thousand" when given 1000', function () {
    expect(numberToEnglish(1000)).to.equal('one thousand')
  })

  it('should return "twenty-one" when given 21', function () {
    expect(numberToEnglish(21)).to.equal('twenty-one')
  })

  it('should return "one hundred and eleven" when given 111', function () {
    expect(numberToEnglish(111)).to.equal('one hundred and eleven')
  })

  it('should return "three hundred and fifty-nine" when given 359', function () {
    expect(numberToEnglish(359)).to.equal('three hundred and fifty-nine')
  })

  it('should return "fifteen" when given 15', function () {
    expect(numberToEnglish(15)).to.equal('fifteen')
  })

  it('should error when given numbers < 0', function () {
    expect(() => numberToEnglish(-1)).to.throw('Sorry, I only know about numbers between 1 and 1,000')
  })

  it('should error when given numbers > 1,000', function () {
    expect(() => numberToEnglish(1001)).to.throw('Sorry, I only know about numbers between 1 and 1,000')
  })

  it('should only accdept number types', function () {
    expect(() => numberToEnglish('100')).to.throw('Invalid input type: string, expected: number')
  })
})
