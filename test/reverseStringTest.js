/* 
example Test
 
to run the test, make sure you've installed node modules and run the following command.



*/
var { assert } = require('chai');
var reverseString = require('../reverseString');

describe('reverseString', () => {
  it('should reverse a string', () => {
    const input = 'sup'
    const output = 'pus'

    assert.equal(reverseString(input), output)
  })
})