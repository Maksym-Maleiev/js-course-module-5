/*
 * Exercise
 */

class StringBuilder {
  constructor(initialValue = '') {
    this.value = initialValue;
  }

  getValue() {
    return this.value;
  }

  padEnd(str) {
    this.value.push(str);
  }

  padStart(str) {
    this.value.pop(str);
  }
}

// Change code above this line
const builder = new StringBuilder('.');
console.log(builder.getValue());
// "."
builder.padStart('^');
console.log(builder.getValue());
// "^."
builder.padEnd('^');
console.log(builder.getValue());
// "^.^"
builder.padBoth('=');
console.log(builder.getValue());
// "=^.^="
