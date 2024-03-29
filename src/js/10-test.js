/*
 * Exercise
 */

class Storage {
  constructor(items = []) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(itemToRemove) {
    const index = this.items.findIndex(el => el === itemToRemove);

    this.items.splice(index, 1);
  }
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
