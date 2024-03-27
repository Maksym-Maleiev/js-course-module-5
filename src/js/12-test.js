console.log('Приватні властивості');

class User {
  // Необов'язкове оголошення громадських властивостей
  name;
  // Обов'язкове оголошення приватних властивостей
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({ name: 'Mango', email: 'mango@mail.com' });
mango.changeEmail('mango@supermail.com');
console.log(mango.getEmail());
// mango@supermail.com
console.log(mango.#email);
// Буде помилка, це приватна властивість

/*
 * Exercise
 */
