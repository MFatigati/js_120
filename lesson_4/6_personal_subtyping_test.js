class Vegetable {
  constructor(type, flavor) {
    this.type = type;
    this.flavor = flavor;
  }
  grow() {
    console.log('I\'m growing')
  }
}

class Animal extends Vegetable {
  constructor(type) {
    super(type);
  }
  sense() {
    console.log(`I'm sensing`)
  }
}

class Human extends Animal {
  constructor(type) {
    super(type);
  }
  think(){
    console.log(`I'm thinking`)
  }
}

let michael = new Human(`white`);
michael.grow();
console.log(michael.type);
