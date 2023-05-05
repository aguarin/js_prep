function getNumber(prompt) {
  let rlSync = require('readline-sync');
  let number = rlSync.question(prompt);
  return number;
}

let firstNumber = getNumber("What is the first number?");
let secondNumber = getNumber("What is the second number?");
let product = firstNumber * secondNumber;
console.log(`${firstNumber} * ${secondNumber} = ${product}`)