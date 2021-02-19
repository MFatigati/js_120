// 1

/* let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter); */

// Emphasis context for RECTANGLE.area RECTANGLE.perimeter is the object rectangle.
// So when those methods are invoked, they are home in a context without the necessary values.

// 2

/* let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this); // modified this line
  this.perimeter = RECTANGLE.perimeter.call(this); // modified this line
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter); */

// 3 Write a constructor function called Circle that takes a radius as 
// an argument. You should be able to call an area method on any objects 
// created by the constructor to get the circle's area. Test your implementation 
// with the following code:

/* function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return Math.PI * Math.pow(this.radius, 2)
};

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
console.log(a.hasOwnProperty('area')); // => false */

// 4

/* function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword()); // logs true because swingsword is available to all instances of ninja */

// 5

/* function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword()); // cannot find swingSword on ninja
// When you replace the object referenced by a constructors prototype property,
// you don't change the object to which the children's __proto__ points.
// So in this repsect, it is important to note that __proto__ doesn't point
// to the prototype property's value on the constructor, but rather just to the
// object. And this reference stays fixed, even if the constructor changes
// its prototype property. */

// 6 Implement the method described in the comments below:

/* function Ninja() {
  this.swung = false;
}

// Add a swing method to the Ninja prototype which
// modifies `swung` and returns the calling object

let ninjaA = new Ninja();
let ninjaB = new Ninja();

Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
}

console.log(ninjaA.swing().swung);      // logs `true`
console.log(ninjaB.swing().swung);      // logs `true` */

// 7 In this problem, we'll ask you to create a new instance of an object, 
// without having direct access to the constructor function:

/* let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else
let ninjaB = new ninjaA.constructor;

console.log(ninjaA.constructor === ninjaB.constructor) // => true */

// 8

/* function User(first, last) {
  this.name = first + " " + last;
  return this;
}

let someName = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(someName);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe */

function User(first, last) {
  if (User.prototype.isPrototypeOf(this)) {
    this.name = first + " " + last;
  } else {
    return new User(first, last);
  }
}

let someName = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(someName);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe