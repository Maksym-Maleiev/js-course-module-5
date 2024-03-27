console.log('Приватні властивості');

// class User {
//   // Необов'язкове оголошення громадських властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: 'Mango', email: 'mango@mail.com' });
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail());
// // mango@supermail.com
// console.log(mango.#email);
// // Буде помилка, це приватна властивість

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

  // Change code above this line
}

const car1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });

const car2 = new Car({ brand: 'bmw', model: 'X5', price: 58900 });

const car3 = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });
