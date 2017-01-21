const chai = require('chai')
const expect = chai.expect
const FizzBuzz = require('../lib/FizzBuzz')


describe('FizzBuzz', function() {
  it('handles simple numbers', function() {
    const fizzbuzz = new FizzBuzz();
    expect(fizzbuzz.play(1)).to.equal(1);
    expect(fizzbuzz.play(2)).to.equal(2);
    expect(fizzbuzz.play(101)).to.equal(101);
  });

  it('handles multiples of 3', function() {
      const fizzbuzz = new FizzBuzz();
      var maxLoopCount = 1000,
          loopCount;
      for( loopCount = 1; loopCount < maxLoopCount; loopCount++ ) {
          expect(fizzbuzz.play(3*loopCount)).to.equal('Fizz');
      }
  })
});
