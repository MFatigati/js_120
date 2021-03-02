class Person {
  greeting(text) {
    console.log(text);
  }
};

class Shouter extends Person {
  // constructor(){
  //   super();
  // }
  greeting(text) {
    Person.prototype.greeting(text.toUpperCase());
    // super.greeting(text.toUpperCase());
  }
}
// Shouter.prototype = Object.create(Person.prototype)
// Shouter.prototype.greeting = function(text) {
//   Person.prototype.greeting.call(this, text.toUpperCase());
// }

let person = new Person();
let shouter = new Shouter();

console.log(Object.getOwnPropertyNames(Person.prototype))
person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter.greeting("Hello my friend."); // HELLO MY FRIEND.