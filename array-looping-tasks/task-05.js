/*
let sentence = "hi i'm learning web development";
let sentenceArr = sentence.split(" ");
let newSentence = [];
for (const word of sentenceArr) {
  let newWord = word.split("");
  let newUpperWord = [];
  let i = 0;
  let wordLength = newWord.length;
  while (i < wordLength) {
    if (i === 0) {
      newUpperWord.push(newWord[0].toUpperCase());
    } else {
      newUpperWord.push(newWord[i]);
    }
    i++;
  }
  newSentence.push(newUpperWord.join(""));
}
console.log(newSentence.join(" "));
*/

let sentence = "hi i'm learning web development";
let sentenceArr = sentence.split(" ");
let newSentence = [];

for (let word of sentenceArr) {
  //   newSentence.push(word[0].toUpperCase() + word.slice(1));
  let newUpperWord = word[0].toUpperCase() + word.slice(1);
  newSentence.push(newUpperWord);
}

console.log(newSentence.join(" "));
