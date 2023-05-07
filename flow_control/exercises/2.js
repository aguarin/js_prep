/* REFACTORED BELOW
function evenOrOdd (number) {
  if (Number.isInteger(number)) {
    if (number % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
  console.log('ERROR: number is not an integer');
  }
}
*/

function evenOrOdd (number) {
  if (!Number.isInteger(number)) {
    console.log('ERROR: number is not an integer');
    return;
  }
  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

console.log(evenOrOdd(2.5415))