class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

let fakeCat = {
  speaks() {
    return `${this.name} says meowwww.`;
  } 
}

// fakeCat.__proto__ = Cat.prototype;
Object.setPrototypeOf(fakeCat, Cat.prototype);


console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.name);           // logs undefined
console.log(fakeCat.speaks());       // logs undefined says meowwww.