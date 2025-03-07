// Create a function that takes a number as an argument.Add up all the numbers from 1 to the number you passed to the function.

function addNumbers(num){
    if(num<1 || num>1000){
        return "num must be between 1 to 1000";
    }
    let sum = 0;
    for(let i=1; i<=num;i++){
        sum=sum+i;
    }
    return sum;
}
console.log(addNumbers(4));
console.log(addNumbers(13));
console.log(addNumbers(600));