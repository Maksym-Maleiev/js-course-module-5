/*
 * Наслідування класів
 */

class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  // Тіло класу ContentEditor
}

const editor = new ContentEditor('mango@mail.com');
console.log(editor);
// { email: "mango@mail.com" }
console.log(editor.email);
// "mango@mail.com"

/*
 * Exercise
 */

class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Change code below this line

class Admin extends User {
  static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
}
