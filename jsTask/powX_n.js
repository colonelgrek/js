"use strict";
let number = +prompt( "Введите число", 2);
let n = +prompt( "Введите степень (целое положительное число)", 3);

function pow(x,  n){
let result = 1;
for ( let i=1; i <= n; i++  ){
result *= x;  }
return result
}

if ( n < 0 ) { alert ("Следует вводить только целые положительные числа для значения степени n!" )} else if ( !isNaN( number ) && !isNaN( n ) ) { alert ( pow( number, n ) );}
else { alert ( "Следует вводить только числа!" ); }