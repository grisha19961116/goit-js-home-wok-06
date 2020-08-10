import users from './users.js'
// Завдання 10
// Отримати масив всіх умінь всіх користувачів (поле skills),
//  при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const getSortedUniqueSkills = users => {
    // const sorting = users.sort(function(a,b){
    //     let c = a.skills;
    //     let d = b.skills;
    //     if( c < b ){
    //         return -1;
    //     }else if( c > b ){
    //         return 1;
    //     }
    //     return 0;
    // }).map(tipe => tipe.skills);
    const sorting = users.map(user => user.skills).forEach((num, idx) => {
    if(num.includes(idx)){
        num.splice(idx,1)
    }
     console.log(`index ${idx}, value ${num}`)}
     );;

    return sorting;
  // твій код
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud',