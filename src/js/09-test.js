console.log('Методи класу');

class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  // Метод getEmail
  getEmail() {
    return this.email;
  }

  // Метод changeEmail
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const max = new User({ name: 'Max', email: 'max@mail.com' });
console.log(max);

console.log(Object.getPrototypeOf(max));

/*
 * Exercise
 */

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code below this line
  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {}
  // Change code above this line
}
