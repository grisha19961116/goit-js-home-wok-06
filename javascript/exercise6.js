import users from "./users.js";
//  Exercise 6 get masive users which appear into age range from min to max.

const getUsersWithAge = (users, min, max) => {
  const ageLimit = users.filter((user) => user.age > min && user.age < max);
  return ageLimit;
};

console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
