/* 
Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:
[12, 98, 76, 46]
*/
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];

/* solution 01 using for...of loop 
for (const number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}
*/
/* solution 02 using while loop 
let i = 0;
let totalNumbers = numbers.length;
while (i < totalNumbers) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
  i++;
}
 */
/* solution 03 using basic for loop */
let i = 0;
let totalNumbers = numbers.length;
for (; i < totalNumbers; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers);
