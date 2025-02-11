/*
 * all types of loop like for...of, for, while
 */
const friends = ["Sajid", "Dihan", "Mohammed", "Tanisha", "Jihad"];
let i;
let totalFriends = friends.length;
/* 
for (const friend of friends) {
  console.log(friend);
 }
*/
/*
while (i < totalFriends) {
  console.log(friends[i]);
  i++;
}
*/

for (i = 0; i < totalFriends; i++) {
  console.log(friends[i]);
}
