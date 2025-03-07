function palSeq(palindrome) {
    function isPalindrome(num) {
        return num === parseInt(num.toString().split('').reverse().join(''));
    }
    for (let seed = 1; seed <= palindrome ; seed++) { 
        let num = seed;
        let steps = 0;

        while (!isPalindrome(num)) {
            num += parseInt(num.toString().split('').reverse().join(''));
            steps++;
        }
        if (num === palindrome) {
            return [seed, steps];
        }
    }
}
console.log(palSeq(4884)); // [69, 4]
console.log(palSeq(1)); // [1, 0]
console.log(palSeq(11)); // [10, 1]

// console.log(palSeq(3113)); // [199, 3]
// console.log(palSeq(8836886388)); // [177, 15]

