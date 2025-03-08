// Product Interface
interface Vehicle {
  drive(): void;
}

// Concrete Product 1
class Car implements Vehicle {
  drive(): void {
    console.log("🚗 Driving a car...");
  }
}

// Concrete Product 2
class Bike implements Vehicle {
  drive(): void {
    console.log("🏍 Riding a bike...");
  }
}

// Simple Factory
class VehicleFactory {
  static createVehicle(type: string): Vehicle {
    if (type === "car") {
      return new Car();
    } else if (type === "bike") {
      return new Bike();
    } else {
      throw new Error("Invalid vehicle type");
    }
  }
}

// Client Code
const car: Vehicle = VehicleFactory.createVehicle("car");
car.drive(); // 🚗 Driving a car...

const bike: Vehicle = VehicleFactory.createVehicle("bike");
bike.drive(); // 🏍 Riding a bike...
