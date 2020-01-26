function powerX_n(){
    "use strict";
    function power(x, n){
        let result = 1;
        for ( let i = 1; i <= n; i++ ){
            result *= x;
        }
        return result;
    }

    let number = +prompt( "Введите число", 0);
    let n = +prompt( "Введите степень (целое положительное число)", 0);

    if ( n < 0 ) {
        alert ("Следует вводить только целые положительные числа для значения степени n!")
    } else if ( !isNaN(number) && !isNaN(n) ) { alert ( power(number, n) );
    } else { alert ( "Следует вводить только числа!" ); }
}