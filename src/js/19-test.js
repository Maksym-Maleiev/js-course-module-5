/*
 * Конструктор дочірнього класу
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

class ContentEditor extends User {
  constructor({ email, posts }) {
    // Виклик конструктора батьківського класу User
    super(email);
    this.posts = posts;
  }
}

const editor = new ContentEditor({ email: 'mango@mail.com', posts: [] });
console.log(editor);
// {email: 'mango@mail.com', posts: []}
console.log(editor.email);
// 'mango@mail.com'
