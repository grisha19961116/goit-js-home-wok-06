import users from "./users.js";
// Exercise 4 get massive only not active users by field isActive.

const getInactiveUsers = (users) => {
  const isNotActive = users
    .filter((user) => !user.isActive)
    .map((el) => [el.name]);
  return isNotActive;
};

console.log(getInactiveUsers(users));
// [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
