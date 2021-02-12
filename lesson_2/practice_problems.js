/* function assignProperty(childObject, propToLookFor, valueToAssign) {
  let currentProto = Object.getPrototypeOf(childObject);
  // console.log(currentProto);

  while (currentProto !== null) {
    // console.log(currentProto);
    debugger;
    if (currentProto.hasOwnProperty(propToLookFor)) {
      currentProto[propToLookFor] = valueToAssign;
      break;
    } else {
      currentProto = Object.getPrototypeOf(currentProto);
    }
  }
} */

/* function assignProperty(childObject, propToLookFor, valueToAssign) {
  let currentProto = Object.getPrototypeOf(childObject);
  if (currentProto === null) return undefined;

  if (currentProto.hasOwnProperty(propToLookFor)) {
    currentProto[propToLookFor] = valueToAssign;
    return undefined;
  } else assignProperty(currentProto, propToLookFor, valueToAssign)
}

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false */

/* let objA = {
  bar: 1,
  qux: 2,
}

let foo = Object.create(objA);

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`); // logs any ennumerable property, whether own or not
}

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`); // only logs ennumerable properties that are own properties
}); */

let objA = {
  bar: 1,
  qux: 2,
}
console.log(Object.getPrototypeOf(objA));
Object.setPrototypeOf(objA, null);
console.log(Object.getPrototypeOf(objA));
// also
let objB = Object.create(null);
console.log(Object.getPrototypeOf(objB));