let number = 4936;
let ones = number % 10;
ones

number = (number - ones) / 10;

let tens = number % 10;
tens

number = (number - tens) / 10;

let hundreds = number % 10
hundreds

number = (number - tens) / 10

let thousands = (number - hundreds) % 10
thousands
console.log(thousands)
