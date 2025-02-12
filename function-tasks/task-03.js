/* 
Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/
const integerNumbers = [3, 4, 5, 8, 9];
function make_avg(intNumbers) {
    let len = intNumbers.length;
    let sum = 0;
    let avg;
    for(const number of intNumbers){
        sum += number;
        
    }
    avg = Math.round(sum / len);
    return avg;
}
let average = make_avg(integerNumbers);
console.log('around',average)