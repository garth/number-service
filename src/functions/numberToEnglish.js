const words = {
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eightteen',
  '19': 'nineteen',
  '20': 'twenty',
  '30': 'thirty',
  '40': 'fourty',
  '50': 'fifty',
  '60': 'sixty',
  '70': 'seventy',
  '80': 'eighty',
  '90': 'ninty'
}

const numberToEnglish = (number) => {
  // ensure that number is a number
  if (typeof number !== 'number' || isNaN(number)) {
    throw new Error(`Invalid input type: ${typeof number}, expected: number`)
  }
  // ensure that the number is in the acceptable range
  if (number < 0 || number > 1000) {
    throw new Error('Sorry, I only know about numbers between 1 and 1,000')
  }

  let parts = ('' + number).split('')
  let english = []

  // thousands
  if (parts.length === 4) {
    english.push(words[parts.shift()])
    english.push('thousand')
  }

  // hundreds
  if (parts.length === 3) {
    if (parts[0] === '0') {
      parts.shift()
    } else {
      english.push(words[parts.shift()])
      english.push('hundred')
    }
  }

  // tens
  if (parts.length === 2) {
    if (parts[0] === '0') {
      parts.shift()
    } else {
      if (english.length) {
        english.push('and')
      }
      if (words[parts.join('')]) {
        english.push(words[parts.join('')])
        parts = []
      } else if (parts.length === 2 && words[parts[0] + '0']) {
        let tens = words[parts.shift() + '0']
        if (parts[0] !== '0') {
          tens = tens + '-' + words[parts[0]]
        }
        parts.shift()
        english.push(tens)
      }
    }
  }

  // units
  if (parts.length === 1) {
    if (parts[0] === '0') {
      if (!english.length) {
        english.push('zero')
      }
    } else {
      if (english.length) {
        english.push('and')
      }
      english.push(words[parts.shift()])
    }
  }

  return english.join(' ')
}

module.exports = numberToEnglish
