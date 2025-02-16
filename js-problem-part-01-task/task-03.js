/*
Task 3:
Write a function to count the number of vowels in a string.
*/

let sentence = "We love Bangladesh. Bangladesh is a peaceful country";
let lowerSentence = sentence.toLowerCase();
let vowels = ["a", "e", "i", "o", "u"];
function findTotalVowels(vowels, sentence) {
  let totalVowels = 0;
  for (const vowel of vowels) {
    let matchVowel = sentence.match(new RegExp(vowel, "g"));
    let vowelLen = matchVowel.length;
    // console.log(vowelLen);
    totalVowels += vowelLen;
  }
  return totalVowels;
}
const totalVowels = findTotalVowels(vowels, lowerSentence);
console.log(totalVowels);
