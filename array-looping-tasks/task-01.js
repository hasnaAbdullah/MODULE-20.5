/*
Task 1 --->
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:
['orange', 'yellow', 'green', 'blue', 'red']

*/
const colors = ["red", "blue", "green", "yellow", "orange"];
let newColors = [];
/* solution 1 using for...of 
for(const color of colors) {
    newColors.unshift(color)
}
*/

/* solution 02 using while loop 
let i = 0;
let totalColors = colors.length;
while (i < totalColors) {
  newColors.unshift(colors[i]);
  i++;
}
*/

/* solution 03 using for loop 
let i = 0;
let totalColors = colors.length;
for(; i < totalColors; i++) {
    newColors.unshift(colors[i])
}
*/

/* solution 04 using max index */
let i = colors.length - 1;
for (; i >= 0; i--) {
  newColors.push(colors[i]);
}
console.log(newColors);
