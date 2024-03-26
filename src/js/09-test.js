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
    console.log(this.price);
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
  // Change code above this line
}

const newCar = new Car({ brand: 'Honda', model: 'Accord', price: 10000 });
console.log(newCar);
newCar.getPrice();
newCar.changePrice(8000);
console.log(newCar);
