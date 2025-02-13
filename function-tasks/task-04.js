/* 
Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

*/
let binaryStr = "001101100101";

function count_zero(str) {
  let strLen = str.length;
  let totalOccurrence = str.match(/0/gi).length;
  return totalOccurrence;
}
// console.log("total 0 occurrence is:", count_zero(binaryStr));

function count_zero2(str) {
    let count = 0;
    let strLen = str.length;
    for(let i = 0 ; i< strLen; i++) {
        if(str[i] === '0') {
            count++;
        }
    }
    return count;
}
const totalOccurrence = count_zero2(binaryStr);
console.log('total occurrence is:', totalOccurrence)