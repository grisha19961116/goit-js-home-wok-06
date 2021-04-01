import users from "./users.js";
// Exercise 1 get massive names all users (field name).

const getUserNames = (users) => {
  const names = users.map((user) => user.name);
  return names;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez',
// 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
