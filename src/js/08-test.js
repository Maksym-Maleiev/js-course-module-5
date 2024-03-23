console.log('Об`єкт параметрів');

class User {
  // Деструктуризуємо об'єкт
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}
const mango = new User({ name: 'Mango', email: 'mango@mail.com' });
console.log(mango);
// {name: "Mango", email: "mango@mail.com"}

const poly = new User({ name: 'Poly', email: 'poly@mail.com' });
console.log(poly);
// { name: "Poly", email: "poly@mail.com"}

/*
 * Exercise
 */
