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

class Car {
  // Change code below this line
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}

const car1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
console.log(car1);

const car2 = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
console.log(car2);

const car3 = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });
console.log(car3);
