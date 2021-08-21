class Vehicle {
  constructor(make, model, year) {

    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "beep!";
  }
  describe() {
    return `The vehicle is a ${ this.make } ${ this.model } from ${ this.year }.`
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  describe() {
    return super.describe();
  }
  revEngine() {
    return 'VROOM!!!';
  }
}

class Garage extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.vehicles = [];
    this.capacity = 4;
  }
  add(newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
      return 'Only vehicles are allowed in here!';
    }
    if (this.vehicles.length >= this.capacity) {
      return "Sorre we're full!"
    }
    this.vehicles.push(newVehicle);
    return 'Vehicle Added!';
  }
}