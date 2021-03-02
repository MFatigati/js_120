// first, just prototypal inheritance and Object.create

const vegetative = {
  grow() {
    console.log(`I'm growing!`);
  }
}

const animal = Object.create(vegetative);
animal.sense = function() {
    console.log(`I'm sensing!`);
  };

const rational = Object.create(animal);
rational.think = function() {
    console.log(`I'm thinking!`);
  };

let bob = Object.create(rational);
bob.age = 30;

let jane = Object.create(rational); // bob and jane have the same inheritance chain
jane.age = 50;

bob.grow()
console.log(Object.getOwnPropertyNames(bob));
console.log(Object.getPrototypeOf(bob)); // { think: [Function] }
console.log(vegetative.isPrototypeOf(bob)) // true
console.log(animal.isPrototypeOf(bob)) // true

// second, psuedo-classical below...

class Vehicle {
  move() {
    console.log(`I'm moving!`);
  }
}

class Car extends Vehicle {
  turn() {
    console.log(`I'm turning!`);
  }
}

class Tesla extends Car {
  constructor(color) {
    super();
    this.color = color;
    this.chargeLevel = 0;
  }
  static electric = true;
   charge() {
    console.log(`I'm charging!`)
  }
}

let bobsTesla = new Tesla('blue');
let janesTesla = new Tesla('red'); // bobsTesla and janesTesla have the same inheritance chain

bobsTesla.charge();
console.log(bobsTesla)
console.log(Object.getOwnPropertyNames(bobsTesla)); // [ 'color', 'chargeLevel' ]
console.log(Object.getPrototypeOf(bobsTesla)); // Tesla {}
console.log(bobsTesla.__proto__) // Tesla {}
console.log(bobsTesla.constructor); // [class Tesla extends Car]
console.log(bobsTesla.__proto__.constructor); // [class Tesla extends Car]
console.log(Vehicle.isPrototypeOf(bobsTesla)) // false
console.log(Vehicle.prototype.isPrototypeOf(bobsTesla)) // true
console.log(Car.isPrototypeOf(bobsTesla)) // false
console.log(bobsTesla instanceof Vehicle) // true
console.log(bobsTesla instanceof Car) // true