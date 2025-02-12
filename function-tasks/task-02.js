/*
Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/

let n = 4;
function oddOrEven(number) {
  if (number % 2 === 1) {
    return number * 2;
  }
  return number / 2;
}
let output = oddOrEven(n);
console.log(output);
