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

  getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }

  getModel() {
    return this.model;
  }

  updateModel(newModel) {
    this.model = newModel;
  }

  getPrice() {
    return this.price;
  }

  setPrice(newPrice) {
    this.price = newPrice;
  }
  // Change code above this line
}
