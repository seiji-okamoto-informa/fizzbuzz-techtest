const chai = require('chai')
const expect = chai.expect
const FizzBuzz = require('../lib/FizzBuzz')


describe('FizzBuzz', function() {
  it('handles simple numbers', function() {
    const fizzbuzz = new FizzBuzz();
    var maxLoopCount = 1000,
        loopCount;

    for( loopCount = 1; loopCount < maxLoopCount; loopCount++ ) {
        // Skip instances where loopCount is a multiple of 3 or 5
        if( loopCount % 3 == 0 || loopCount % 5 == 0 ) {
            continue;
        }

        // Test positives
        expect(fizzbuzz.play(loopCount)).to.equal(loopCount);

        // Test negatives
        expect(fizzbuzz.play(-loopCount)).to.equal(-loopCount);
    }
  });

  it('handles multiples of 3', function() {
      const fizzbuzz = new FizzBuzz();
      var maxLoopCount = 1000,
          loopCount;
      for( loopCount = 1; loopCount < maxLoopCount; loopCount++ ) {
          // Skip instances where loopCount is a multiple of 5
          // This is a special case
          if( loopCount % 5 == 0 ) {
              continue;
          }
          expect(fizzbuzz.play(3*loopCount)).to.equal('Fizz');
      }
  });

  it('handles multiples of 5', function() {
      const fizzbuzz = new FizzBuzz();
      var maxLoopCount = 1000,
          loopCount;

      for( loopCount = 1; loopCount < maxLoopCount; loopCount++ ){
          // Skip instances where loopCount is a multiple of 3
          // This is a special case
          if( loopCount % 3 == 0 ){
              continue;
          }
          expect(fizzbuzz.play(5*loopCount)).to.equal('Buzz');
      }
  });

  it('handles multiples of 3 AND 5', function() {
      const fizzbuzz = new FizzBuzz();
      var maxLoopCount = 1000,
          loopCount;
      for( loopCount = 1; loopCount < maxLoopCount; loopCount++ ) {
          expect(fizzbuzz.play(3*5*loopCount)).to.equal('Fizzbuzz');
      }
  });

  /**
   * Zero (0) is a special edge case.  According to Wiki (https://en.wikipedia.org/wiki/Multiple_(mathematics)),
   * it is a multiple of everything, so it should fall under the 3rd rule
   * and output 'Fizzbuzz'.
   **/
  it('handles special edge case of 0', function() {
      const fizzbuzz = new FizzBuzz();

      expect(fizzbuzz.play(0)).to.equal('Fizzbuzz');
  });
});
