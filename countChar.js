function countChar(){
    "use strict";
    function countBs( string, letter ){
        for (let i = 0, len = string.length-1; i <= len; i++) {
            if ( letter == string[i] ) { count++ ;} 
        }
        return count;
    }    

    let stringBase = prompt( "Введите строку, в которой необходимо найти символ", "");
    let char = prompt( "Введите символ, который необходимо найти в строке", "");
    let count = 0;

    countB( stringBase, char );
    alert ('В строке: "' + stringBase + '" ' + count + ' символов "' + char+ '"');
}