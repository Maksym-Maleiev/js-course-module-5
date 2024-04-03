/*
 * Статичні методи
 */

class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takenEmails.push(email);
  }
}

const mango = new User({ email: 'mango@mail.com' });

console.log(User.isEmailTaken('poly@mail.com'));
console.log(User.isEmailTaken('mango@mail.com'));

/*
 * Exercise
 */

class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line

  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price));
// "Success! Price is within acceptable limits"

console.log(Car.checkPrice(bmw.price));
// "Error! Price exceeds the maximum"
