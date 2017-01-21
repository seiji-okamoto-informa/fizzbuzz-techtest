'use strict'

class FizzBuzz {
    play(input) {
        var result = input;

        if( input % 3 == 0 ){
            result = 'Fizz';
        }
        return result;
    }
}

module.exports = FizzBuzz
