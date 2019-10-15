let rs = require('readline-sync');

let userNum1 = rs.question('1st Number: ');
let userNum2 = rs.question('2nd Number: ');
let userNum3 = rs.question('3rd Number: ');
let userNum4 = rs.question('4th Number: ');


let factorialResult = fact(userNum1);
let sumOfAllDigitsResult = sumOfAllDigits(userNum2);
let reverseNumberResult = reverseOfNumber(userNum3);
let palindromeResult = palindromeCheck(userNum4);


function fact(givenNumber) {
    if(givenNumber == 0) {
        return 1;
    }
    return givenNumber * fact(givenNumber - 1);
}

function sumOfAllDigits(givenNumber){
    let sNumber = givenNumber.toString();
    let result = 0;

    for (let i = 0, len = sNumber.length; i < len; i += 1) {
        result += parseInt(sNumber.charAt(i));
    }

    return result;
}

function reverseOfNumber(givenNumber){
    let sNumber = givenNumber.toString();
    return sNumber.split("").reverse().join("");
}

function palindromeCheck(givenNumber){
    let sNumberOriginal = givenNumber.toString();
    let reverseNumber = reverseOfNumber(givenNumber);

    if(sNumberOriginal == reverseNumber){
        return "True";
    }

    return "False";
}

console.log("Factorial of the 1st number is = " + factorialResult);
console.log("The sum of all digits of the 2nd number is = " + sumOfAllDigitsResult);
console.log("The reverse of the 3rd number is = " + reverseNumberResult);
console.log("Is the 4th number a palindrome (True/False)? = " + palindromeResult);
