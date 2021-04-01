import users from "./users.js";
// Exercise 7 get general balance amount all users by field balance .

const calculateTotalBalance = (users) => {
  const amountAllUsers = users.reduce((acc, val) => acc + val.balance, 0);
  return amountAllUsers;
};

console.log(calculateTotalBalance(users)); // 20916
