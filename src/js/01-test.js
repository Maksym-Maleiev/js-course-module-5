console.log('Контекст виклику функції');

// const bookShelf = {
//   authors: ['Bernard Cornwell', 'Robert Sheckley'],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors());
// // ["Bernard Cornwell", "Robert Sheckley"]
// bookShelf.addAuthor('Tanith Lee');
// console.log(bookShelf.getAuthors());
// // ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]

/*
 * Exercise
 */

const pizzaPalace = {
  pizzas: ['Supercheese', 'Smoked', 'Four meats'],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
};

pizzaPalace.order('Smoked');
pizzaPalace.order('Four meats');
pizzaPalace.order('Big Mike');
pizzaPalace.order('Viennese');
