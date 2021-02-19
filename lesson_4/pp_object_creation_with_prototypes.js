// 1

function createPet(type, name){
  return {
    name: name,
    animal: type,
    sleep: function() {
      console.log("I am sleeping")
    },
    wake: function() {
      console.log("I am awake")
    }
  }
}

let pudding1 = createPet("Cat", "Pudding");
console.log(`I am a ${pudding1.animal}. My name is ${pudding1.name}.`);
pudding1.sleep(); // I am sleeping
pudding1.wake();  // I am awake

let neptune1 = createPet("Fish", "Neptune");
console.log(`I am a ${neptune1.animal}. My name is ${neptune1.name}.`);
neptune1.sleep(); // I am sleeping
neptune1.wake();  // I am awake

// 2

let PetPrototype = {
  sleep(){
    console.log("I am sleeping")
  },
  wake(){
    console.log("I am awake")
  },
  init(animal, name){
    this.name = name;
    this.animal = animal;
    return this;
  }
}

let pudding2 = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding2.animal}. My name is ${pudding2.name}.`);
pudding2.sleep(); // I am sleeping
pudding2.wake();  // I am awake

let neptune2 = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune2.animal}. My name is ${neptune2.name}.`);
neptune2.sleep(); // I am sleeping
neptune2.wake();  // I am awake

// 3

console.log(pudding2.__proto__)
console.log(pudding1.__proto__)
// Objects created with the factory function do not have a prototype
// whereas those created with object linking do

console.log(Object.getOwnPropertyNames(pudding1));
console.log(Object.getOwnPropertyNames(pudding2));

// Objects created with a factory function have more own properties
// Since they are not inheriting some of them from a Proto type

console.log(Object.getOwnPropertyNames(createPet))