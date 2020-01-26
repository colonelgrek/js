function FizzBuzz() {
  "use strict";
  let result = '';

  for (let index = 1; index <= 100; index++) {
    if ( index % 3 == 0 && index % 5 == 0 ){
      result += 'FizzBuzz ';
    } else if ( index % 3 == 0 ){
        result += 'Fizz ';
      } else if ( index % 5 == 0 ){
          result += 'Buzz ';
        } else {
            result += index + ' ';
          }  
  }

  alert(result);
}