function createCar(make, fuelLevel, engineOn) {
  return {
          make: make,
          fuelLevel: fuelLevel,
          engineStatus: engineOn,
          drive() {
            this["Fuel Level"] -= .01;
          },
          start() {
            this["Engine Status"] = 'on';
          },
          displayMake() {
            console.log(this.make);
          }
        }
}

// let raceCar1 = createCar('Jaguar', 0.4, 'off');
// console.log(raceCar1)
// raceCar1.drive();
// console.log(raceCar1)
// raceCar1.start();
// console.log(raceCar1)
// raceCar1.displayMake();

// Make: Jaguar
// Fuel Level: 0.4
// Engine Status: off

function makeCar(make) {
  return {
    make: make,
    displayMake() {
        console.log(this.make);
      }
  }
}

let car1 = makeCar("Honda");
car1.displayMake();
