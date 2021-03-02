class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  getWheels() {
    return this.wheels;
  }

  info() {
    return `${this.make} ${this.model}`
  }
}


class Car extends Vehicle {
  constructor(make, model, wheels) {
    super(make, model, wheels);
  }
}

// also works without any constructor, e.g.:
// class Car extends Vehicle {
// }

let car1 = new Car('Honda', 'Civic', 4)
console.log(car1.wheels);

class Motorcycle {
}

class Truck extends Vehicle {
  constructor(make, model, wheels, payload) {
    super(make, model, wheels);
    this.payload = payload;
  }
}

let truck1 = new Truck('Toyota', '4Runner', 6, 100);
console.log(truck1)
console.log(truck1.getWheels())