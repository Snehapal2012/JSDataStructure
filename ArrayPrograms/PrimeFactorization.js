/**Extend the Prime Factorization Program to store all the Prime Factors of a
number n into an array and finally display the output. */
const prompt=require("prompt-sync")();
let primeFactorsArray = new Array();
var number=parseInt(prompt("Enter the number: "));

while (number % 2 == 0) {
    primeFactorsArray.push(2);
    number /= 2;
}

for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i == 0) {
        primeFactorsArray.push(i);
        number /= i;
    }
}
if (number > 2)
    primeFactorsArray.push(number);
console.log(primeFactorsArray);
