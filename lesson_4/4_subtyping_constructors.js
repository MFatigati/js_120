/* function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

Rectangle.prototype.toString = function() {
  return `[Rectangle ${this.length} x ${this.width}]`;
};

function Square(size) {
  this.length = size;
  this.width = size;
}

Square.prototype = Object.create(Rectangle.prototype);

Square.prototype.toString = function() {
  return `[Square ${this.length} x ${this.width}]`;
};

let sqr = new Square(5);
// console.log(sqr.getArea());     // => 25
// console.log(sqr.toString());    // => "[Square 5 x 5]"

console.log(Object.getPrototypeOf(Square.prototype))

 */

function Greeting() {}

Greeting.prototype.greet = function(message) {
  console.log(message);
};

function Hello() {}

Hello.prototype = Object.create(Greeting.prototype);

Hello.prototype.hi = function() {
  this.greet('Hello!');
};

function Goodbye() {}

Goodbye.prototype = Object.create(Greeting.prototype);

Goodbye.prototype.bye = function() {
  this.greet("Goodbye");
};

// Case 1

// let hello = new Hello();
// hello.hi();
// console.log(Object.getOwnPropertyNames(hello))

// logs "Hello!", behavior which is inherited from the
// own property `hi` on Hello's prototype object, which
// is pointed to by hello's __proto__ property

// Case 2

// let hello = new Hello();
// hello.bye();

/* will not log anything because hello does not have access to `bye
`bye` is on the prototype object for goodbye, so anything created
with Goodbye will have access to `bye`, but that does not apply to hello
in this case
*/

// Case 3

// let hello = new Hello();
// hello.greet();

/* won't throw an error, because hello does have access to this function.
JS does not find greet on hello, so it looks on Hello's prototype object.
It is not their, so it looks on the Greeting prototype object, pointed to by
Hello's dunder proto. 
*/

// Case 4

// let hello = new Hello();
// hello.greet('Goodbye');

/* should log Goodbye, because it has access to this function, and
an argument is passed*/


// Case 5

Hello.hi();

/* will result in an error, because hi is not a static property on Hello,
nor it it on its prototype chain. It is on its prototype object, but this 
is not called in such a way as to access it that way */