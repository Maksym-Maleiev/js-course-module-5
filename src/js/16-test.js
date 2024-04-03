/*
 * Статичні властивості
 */

class User {
  // Оголошення та ініціалізація статичної властивості
  static Roles = { ADMIN: 'admin', EDITOR: 'editor' };

  #email;
  #role;

  constructor({ email, role }) {
    this.#email = email;
    this.#role = role;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const mango = new User({ email: 'mango@mail.com', role: User.Roles.ADMIN });
console.log(mango.Roles);
// undefined
console.log(User.Roles);
// { ADMIN: "admin", EDITOR: "editor"}
console.log(mango.role);
// "admin"
mango.role = User.Roles.EDITOR;
console.log(mango.role);
// "editor"

/*
 * Exercise
 */

class Car {
  // Change code below this line
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price);
// 35000

audi.price = 49000;
console.log(audi.price);
// 49000

audi.price = 51000;
console.log(audi.price);
// 51000
