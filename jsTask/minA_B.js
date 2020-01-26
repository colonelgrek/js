function minA_B() {
    "use strict";
    function min(a, b){
        if (a == b) return "Числа равны";
        return (a < b) ? a : b; 
    }

    let number1 = +prompt( "Введите первое число", 0);
    let number2 = +prompt( "Введите второе число", 0);

    if ( !isNaN(number1) && !isNaN(number2) ) {
        alert ( min(number1, number2) );
    } else alert ( "Следует вводить только числа!" );
} 