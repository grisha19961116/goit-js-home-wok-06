import users from "./users.js";
// Exercise 3 get massive users names by filed gender.

const getUsersWithGender = (users, gen) => {
  const foundGender = users
    .filter((users) => users.gender === gen)
    .map((el) => el.name);
  return foundGender;
};

console.log(getUsersWithGender(users, "male"));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
