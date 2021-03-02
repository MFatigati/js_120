/* class Person {
  constructor(name, gait) {
    this.name = name;
    this.gait = gait;
  }

  walk() {
    return `${this.name} ${this.gait} forward.`;
  }
}

class Cat extends Person{
}

class Cheetah extends Person{
}

let mike = new Person("Mike", 'strolls');
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty", 'saunters');
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash", 'runs');
console.log(flash.walk());
// "Flash runs forward" */

// Rather than extending the class, in this case it makes more sense to use a mixin
// since person is not a superclass of the other two

class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
}

class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }
}

let walkMixin = {
  walk() {
    return `${this.name} ${this.gait()} forward.`;
  }
}

Object.assign(Person.prototype, walkMixin);
Object.assign(Cat.prototype, walkMixin);
Object.assign(Cheetah.prototype, walkMixin);

let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"