/*
Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
*/
let sentence = 'I am learning Programming to become a programmer';
function getLongestWord(sentence) {
    let newSentence = sentence.split(" ");
    let longestWord = newSentence[0];
    for(const word of newSentence) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
const output = getLongestWord(sentence);
console.log(output);