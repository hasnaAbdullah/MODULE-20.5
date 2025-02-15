/*
Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed']
*/
const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];
function smallestName(names) {
  let smallest = names[0];
  let smallestLength = smallest.length;
  for (const name of names) {
    if (smallestLength > name.length) {
      smallest = name;
      smallestLength = name.length;
    }
  }

  //challenge task in the following
  for (let i = 0; i < 1; i++) {
    const upperName =
      smallest[i].toUpperCase() + smallest.slice(1, smallestLength);
    smallest = upperName;
  }
  return smallest;
}
const friend = smallestName(heights2);
console.log("smallest friend's name is:", friend);