class Cat {
  constructor(name) {
    this.name = name;
    this.greet();
    this.logNewCat();
  }
  greet() {
    console.log(`Hello! My name is ${this.name}.`);
  }
  logNewCat() {
    console.log(`I'm a cat!`);
  }
  rename(newName) {
    this.name = newName;
  }

  static genericGreeting() {
    console.log(`Hello! I'm a cat!`);
  }

  personalGreeting() {
    console.log(`Hello! My name is ${this.name}.`);
  }
}

let kitty = new Cat('Sophie');
kitty.greet();
// console.log(Object.getOwnPropertyNames(Cat.prototype));

console.log(kitty.name); // Sophie
kitty.rename('Chloe');
console.log(kitty.name); // Chloe

Cat.genericGreeting();
kitty.personalGreeting();
