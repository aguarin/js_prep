
function getName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Your name is ${firstName} ${lastName}.`);