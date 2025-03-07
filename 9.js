// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd,
//  and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

function oddEven(num){
    let sum = 0;
    let numStr = num.toString();
    for(i=0; i< numStr.length ; i++){
        sum = sum + parseInt(numStr[i]);
    }
    if(sum%2 === 0){
        return "Evenish"
    }
    else{
        return "oddish"
    }
}
console.log(oddEven(121)); 
console.log(oddEven(41));  
console.log(oddEven(43));  
console.log(oddEven(373)); 
console.log(oddEven(4433));
