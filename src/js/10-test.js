/*
 * Exercise
 */

class Storage {
  constructor({ items } = []) {
    this.items = items;
  }

  getItems() {
    console.log(this.items);
    return this.items;
  }

  addItem(newItem) {}

  removeItem(itemToRemove) {}
}

// Change code above this line
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);

console.log(storage.getItems());
// ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');

console.log(storage.getItems());
// ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');

console.log(storage.getItems());
// ["Nanitoids", "Antigravitator", "Droid"]
