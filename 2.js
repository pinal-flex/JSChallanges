// Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based.

function timeForMilkAndCookies(date) {
    return date.getMonth() === 11 && date.getDate() === 24;
}
console.log(timeForMilkAndCookies(new Date(2013, 11, 24))); 
console.log(timeForMilkAndCookies(new Date(2013, 0, 23)));  
console.log(timeForMilkAndCookies(new Date(3000, 11, 24)));
