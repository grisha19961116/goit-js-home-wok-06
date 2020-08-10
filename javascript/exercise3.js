// Завдання 3
// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів.
//  При виклику буде отримувати один аргумент - початковий масив товарів,
//   і записувати його у властивість items.

// Додай методи класу:
class Storage {
constructor(massive){
  this.massive = massive;
  }
  getItems(){
    return this.massive;
  }
  addItem(item){
    return this.massive.push(item);
  }
  removeItem(item){
    const index = this.massive.indexOf(item);
    if (index > -1){
      return this.massive.splice(index,1);
    }
  }
}
// getItems() - повертає масив поточних товарів
// addItem(item) - отримує новий товар і додає його до поточних
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних
const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
