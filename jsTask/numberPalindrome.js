function numberPalindrome() {
  "use strict";
  let palindrome = +prompt( "Введите число? которое следует проверить", 0);
  let emordnilap = 0;
  let buffer = palindrome;

  if ((palindrome < 0) || isNaN(palindrome) || !Number.isInteger(palindrome)) {
    alert ("Следует вводить только целые положительные числа!");
  } else { while (buffer!=0){
            emordnilap = emordnilap*10+buffer%10;
            buffer = Math.floor(buffer/10);
          }
    if (palindrome == emordnilap) alert ('Число ' + palindrome + ' является палиндром.');
    else alert ('Число ' + palindrome + ' не является палиндром.');
  }  
}

