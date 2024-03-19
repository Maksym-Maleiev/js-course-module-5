console.log('Прототип об`єкту');

const animal = { legs: 4 };
const dog = Object.create(animal);
dog.name = 'Mango';

console.log(dog);
// { name: 'Mango', __proto__: animal }
console.log(animal.isPrototypeOf(dog));
// true

/*
 * Exercise
 */
