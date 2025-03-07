// Write a function that takes a string input and returns the string in a reversed case and order.

function invert(str){
    for(i=0; i< str.length; i++){
        return str.split('').reverse().map(c => {return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()}).join('');
    }
}
console.log(invert("dLROW YM sI HsEt"));
console.log(invert("ytInIUgAsnOc"));
console.log(invert("step on NO PETS")) 
console.log(invert("XeLPMoC YTiReTXeD"));