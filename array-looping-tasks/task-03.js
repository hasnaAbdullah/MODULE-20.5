/*
Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:
'TomTimTinTik'
*/
const numbers = ["Tom", "Tim", "Tin", "Tik"];
let numbersString = "";

/* solution 01
for (const number of numbers) {
  numbersString += number;
}
  */

/* solution 02 */
let i = 0;
let totalNumbers = numbers.length;
while (i < totalNumbers) {
  numbersString += numbers[i];
  i++;
}
console.log(numbersString);
