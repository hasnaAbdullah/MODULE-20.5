/*
Task 03. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
*/

const books = [
  "biology",
  "physics",
  "maths",
  "history",
  "geography",
  "english",
  "javascript",
];
if (books.includes("javascript")) {
  console.log("yes there is a javascript book");
} else {
  console.log("no, there is not any javascript book");
}
