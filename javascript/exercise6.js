import users from "./users.js";
//  Exercise 6 get masive users which appear into age range from min to max.

const getUsersWithAge = (users, min, max) => {
  const ageLimit = users.filter((user) => user.age > min && user.age < max);
  return ageLimit;
};

console.log(getUsersWithAge(users, 20, 30)); // [array Ross Vazquez, array Elma Head, array Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [array Moore Hensley, array Sharlene Bush, array Blackburn Dotson, array Sheree Anthony]
