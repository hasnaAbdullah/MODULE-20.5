const friends = ["Sajid", "Dihan", "Mohammed", "Tanisha", "Jihad"];
let i ; 
let totalFriends = friends.length - 1;
const newFriendsList = [];
// for(const friend of friends) {
//     newFriendsList.unshift(friend);
// }
// ...................................... /
// while (i < totalFriends) {
//   newFriendsList.unshift(friends[i]);
//   i++;
// }
// .......................................... /

for (i = totalFriends ; i >= 0; i--) {
  newFriendsList.push(friends[i]);
}
console.log(newFriendsList);
