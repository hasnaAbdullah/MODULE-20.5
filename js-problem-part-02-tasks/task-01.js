/*
Task -01:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137]
*/
const heights2 = [167, 190, 120, 165, 137];
function getLowestNumber(numbers) {

    let lowest = numbers[0];
    for(const number of numbers) {
        // console.log(number)
        if(lowest > number) {
            lowest = number;
        }
    }
    return lowest;
}
const lowestNumber = getLowestNumber(heights2);
console.log(lowestNumber)