console.log('Контекст виклику функції');

const bookShelf = {
  authors: ['Bernard Cornwell', 'Robert Sheckley'],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

console.log(bookShelf.getAuthors());
// ["Bernard Cornwell", "Robert Sheckley"]
bookShelf.addAuthor('Tanith Lee');
console.log(bookShelf.getAuthors());
// ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]
