function getRandomNumber(start, end) {
  let i = 0;
  let expectedNumber;
  while (i < Infinity) {
    let number = Math.random() * 100;
    if (number >= start && number <= end) {
      expectedNumber = parseInt(number);
      break;
    }
    i++;
  }
  return expectedNumber;
}
const randomNumber = getRandomNumber(10, 20);
console.log(randomNumber)
