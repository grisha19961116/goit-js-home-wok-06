// Завдання 4
// Напиши клас StringBuilder. На вхід він отримує один 
// параметр - рядок, який записує у властивість _value.

// Додай класу наступний функціонал:

// Геттер value - повертає поточне значення поля _value
// Метод append(str) - отримує параметр str (рядок) і додає його в кінець _value
// Метод prepend(str) - отримує параметр str (рядок) і додає його на початок _value
// Метод pad(str) - отримує параметр str (рядок) і додає його на початок і в кінець _value
class StringBuilder {
  constructor(value){
    this.value = value;
  }
  append(str){
    this.value = this.value + str ;
  }
  prepend(str){
    this.value = str + this.value;
  }
  pad(str){
    this.value = str + this.value + str;
    
  }
  return 
}
const builder = new StringBuilder('.');

builder.append('^');
console.log(`'${builder.value}'`); // '.^'

builder.prepend('^');
console.log(`'${builder.value}'`); // '^.^'

builder.pad('=');
console.log(`'${builder.value}'`); // '=^.^='