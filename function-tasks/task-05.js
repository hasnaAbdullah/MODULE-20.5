/*
Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
*/

let oddOrEven = 4;
function odd_even(number) {
  if (number % 2 === 0) {
    return "Even";
  }
  return "Odd";
}
console.log(odd_even(oddOrEven));
