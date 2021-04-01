import users from "./users.js";
// Exercise 5 get user (not massive) by field email (email is unique).

const getUserWithEmail = (users, email) => {
  const fiendEmail = users.find((user) => user.email === email);
  return fiendEmail;
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com"));
// {об'єкт користувача Elma Head}
