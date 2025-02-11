/*
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:
'person working hard a am I'

*/
const statement = "I am a hard working person";

/* solution 01
const arrStatement = statement.split(" ").reverse().join(" ");
*/

/* solution 02 */
const arrStatement = statement.split(" ");
const newArrStatement = [];
let finalString = "";
for (const word of arrStatement) {
  newArrStatement.unshift(word);
}
for (const reverseWord of newArrStatement) {
  finalString += reverseWord + " ";
}
console.log(finalString);
