'use strict'

class FizzBuzz {
    play(input) {
        var result = input;

        if( input % (3*5) == 0 ) {
            result = 'Fizzbuzz';
        }
        else if( input % 3 == 0 ){
            result = 'Fizz';
        }
        else if( input % 5 == 0 ){
            result = 'Buzz';
        }
        return result;
    }
}

module.exports = FizzBuzz
