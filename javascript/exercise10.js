import users from "./users.js";
// Exercise 10 get massive all skills all users (field skills),
// although have not to be repeating abilities and they have to be sort by alphabet flow.

const getSortedUniqueSkills = (users) => {
  const sorting = users
    .reduce((allSkills, element) => {
      allSkills.push(...element.skills);
      return allSkills;
    }, [])
    .sort();
  const sortDelete = [...new Set(sorting)];
  return sortDelete;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud',
