import users from "./users.js";
// Exercise 8 get massive all names in user in which is friend with indicated name.

const getUsersWithFriend = (users, friendName) => {
  const whoHasFriend = users
    .filter((user) => user.friends.includes(friendName))
    .map((el) => el.name);
  return whoHasFriend;
  // твій код
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
