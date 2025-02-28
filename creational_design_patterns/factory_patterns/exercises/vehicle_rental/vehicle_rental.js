// Base Vehicle class - DO NOT MODIFY
class Vehicle {
  constructor(model, capacity) {
    this.model = model;
    this.capacity = capacity;
  }

  calculateRentalCost(days) {
    // You need to implement this in child classes
    throw new Error("Method not implemented");
  }
}

class Car extends Vehicle {
  constructor(model) {
    super(model, 5); // Cars have capacity of 5
    this.rate = 50; // $50 per day
  }

  calculateRentalCost(days) {
    return this.rate * days;
  }
}

class Bike extends Vehicle {
  constructor(model) {
    super(model, 2); // Bikes have capacity of 2
    this.rate = 20; // $20 per day
  }

  calculateRentalCost(days) {
    return this.rate * days;
  }
}

class Truck extends Vehicle {
  constructor(model) {
    super(model, 3); // Trucks have capacity of 3
    this.rate = 100; // $100 per day
  }

  calculateRentalCost(days) {
    return this.rate * days;
  }
}

// // simple factory
// class VehicleFactory {
//   createVehicle(type, model) {
//     switch (type.toLowerCase()) {
//       case "car":
//         return new Car(model);
//       case "bike":
//         return new Bike(model);
//       case "truck":
//         return new Truck(model);
//       default:
//         throw new Error("Invalid vehicle type");
//     }
//   }
// }

// factory method
class VehicleFactory {
  createVehicle(model) {
    // Factory method to be implemented by subclasses
    throw new Error("createVehicle must be implemented");
  }

  // Template method
  calculateRentalCost(model, days) {
    const vehicle = this.createVehicle(model);
    return vehicle.calculateRentalCost(days);
  }
}

// Concrete Creators
class CarFactory extends VehicleFactory {
  createVehicle(model) {
    return new Car(model);
  }
}

class BikeFactory extends VehicleFactory {
  createVehicle(model) {
    return new Bike(model);
  }
}

class TruckFactory extends VehicleFactory {
  createVehicle(model) {
    return new Truck(model);
  }
}

// Usage Example:
function clientCode(factory, model, days) {
  const vehicle = factory.createVehicle(model);
  return vehicle.calculateRentalCost(days);
}

// Example usage (you can uncomment for testing):
// const carFactory = new CarFactory();
// const bikeFactory = new BikeFactory();
// const truckFactory = new TruckFactory();

// console.log(clientCode(carFactory, "Toyota", 3));  // 150
// console.log(clientCode(bikeFactory, "Honda", 2));  // 40
// console.log(clientCode(truckFactory, "Ford", 4));  // 400

// Export for testing
module.exports = {
  VehicleFactory,
  CarFactory,
  BikeFactory,
  TruckFactory,
};
