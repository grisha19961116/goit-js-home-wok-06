import users from "./users.js";
// Exercise 2 get massive users arrays by eyeColor.

const getUsersWithEyeColor = (users, color) => {
  const findEye = users.filter((user) => user.eyeColor === color);
  return findEye;
};

console.log(getUsersWithEyeColor(users, "blue"));
// [array Moore Hensley, array Sharlene Bush, array Carey Barr]
