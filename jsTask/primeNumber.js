function primeNumber(){
    "use strict";
    let number = prompt( "Введите число от 2 до n");
    let primeNumber = "";
    let buffer = 2;
    if ( !( +number != +number ) && number >= 2){
        for (let i = 2; i <= number; i++){
            for (let j = 2; j < i; j++){
                if ( !(i % j) ){
                buffer = "";
                break; 
                }
            buffer = i;
            }
        if ( buffer ) { primeNumber +=  buffer +", " ; }
        }
        alert ("Простые числа из интервала от 2 до n: \n" + primeNumber.substring(0, primeNumber.length-2));
    } else { alert ( "Следует вводить только числа от 2 до n!" ); }
}