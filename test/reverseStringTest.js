/* 
example Test
 
to run the test, make sure you've installed node modules and run the following command:

mocha

*/
var { expect } = require('chai');
var reverseString = require('../reverseString');

describe('reverseString', () => {
  it('should reverse a string', () => {
    expect(reverseString('hello world')).to.equal('dlrow olleh')
  })
})