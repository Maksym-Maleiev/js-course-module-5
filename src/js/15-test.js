/*
 * Геттери та сетери
 */

class User {
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    if (newEmail === '') {
      console.error('Помилка! Пошта не може бути порожнім рядком!');
      return;
    }

    this.#email = newEmail;
  }
}

const mango = new User({ name: 'Mango', email: 'mango@mail.com' });
console.log(mango.email);
// mango@mail.com

mango.email = 'mango@supermail.com';
console.log(mango.email);
// mango@supermail.com

/*
 * Exercise
 */

class Car {
  // Change code below this line
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.model;
  }

  set model(newModel) {
    this.model = newModel;
  }

  get price() {
    return this.price;
  }

  set price(newPrice) {
    this.price = newPrice;
  }
  // Change code above this line
}
