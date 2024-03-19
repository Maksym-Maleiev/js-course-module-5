/*
 * Exercise
 */

const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish',
};
// Change code below this line

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

// Change code above this line

console.log(ancestor.isPrototypeOf('parent'));
console.log(parent.isPrototypeOf('child'));
console.log(ancestor.hasOwnProperty('surname'));
console.log(ancestor.surname);
console.log(parent.hasOwnProperty('surname'));
console.log(parent.surname);
console.log(child.hasOwnProperty('surname'));
console.log(child.surname);
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
