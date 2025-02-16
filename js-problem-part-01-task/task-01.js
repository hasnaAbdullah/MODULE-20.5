/*
Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
F = (C × 9/5) + 32
*/
let celsiusTemp = 30;
function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit + " F";
}
console.log(celsiusToFahrenheit(celsiusTemp));
