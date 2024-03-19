console.log('Прототип об`єкту');

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog);
// // { name: 'Mango', __proto__: animal }
// console.log(animal.isPrototypeOf(dog));
// // true

// console.log(dog.hasOwnProperty('name'));
// // true
// console.log(dog.name);
// // 'Mango'
// console.log(dog.hasOwnProperty('legs'));
// // false
// console.log(dog.legs);
// // 4

/*
 * Exercise
 */

const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish',
};
// Change code below this line

const child = Object.create(parent);

// Change code above this line
child.name = 'Jason';
child.age = 27;

console.log(parent.hasOwnProperty('surname'));
console.log(parent.hasOwnProperty('heritage'));
console.log(child.hasOwnProperty('name'));
console.log(child.hasOwnProperty('age'));
console.log(child.hasOwnProperty('surname'));
console.log(child.hasOwnProperty('heritage'));
console.log();
