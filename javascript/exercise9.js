import users from "./users.js";
// Exercise 9 get massive names  (field name) people, sorted depends on their friends quantity (filed friends).

const getNamesSortedByFriendsCount = (users) => {
  const sorting = users
    .sort(function (a, b) {
      let c = a.friends;
      let d = b.friends;
      if (c < b) {
        return -1;
      } else if (c > b) {
        return 1;
      }
      return 0;
    })
    .map((el) => el.name)
    .reverse();

  return sorting;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
