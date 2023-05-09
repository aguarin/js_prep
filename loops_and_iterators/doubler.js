function doubler(number) {
  console.log(number);

  if (number <= 1000) {
    doubler(number * 2);
  }
}

doubler(5);