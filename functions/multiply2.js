function multiply(first, second) {
  return first * second
}

function getNumber(prompt) {
  let rlSync = require('readline-sync')
  return parseFloat(rlSync.question(prompt));
}

let first = getNumber("What is the first number? ");
let second = getNumber("What is the second number? ");
console.log(`${first} * ${second} = ${multiply(first, second)}`);
