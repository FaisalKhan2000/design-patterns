// Abstract Product A - Vehicle
class Vehicle {
  constructor(model, capacity) {
    this.model = model;
    this.capacity = capacity;
  }

  getDescription() {
    throw new Error("Method not implemented");
  }
}

// Abstract Product B - PricingPlan
class PricingPlan {
  calculateCost(days) {
    throw new Error("Method not implemented");
  }
}

// Concrete Products A - Vehicles
class StandardCar extends Vehicle {
  constructor(model) {
    super(model, 5);
  }

  getDescription() {
    return `Standard Car: ${this.model} (${this.capacity} seats)`;
  }
}

class PremiumCar extends Vehicle {
  constructor(model) {
    super(model, 5);
  }

  getDescription() {
    return `Premium Car: ${this.model} (${this.capacity} seats)`;
  }
}

// Concrete Products B - Pricing Plans
class StandardCarPricing extends PricingPlan {
  calculateCost(days) {
    return 50 * days; // $50 per day
  }
}

class PremiumCarPricing extends PricingPlan {
  calculateCost(days) {
    return 80 * days; // $80 per day
  }
}

// Abstract Factory
class VehicleRentalFactory {
  createVehicle(model) {
    throw new Error("Method not implemented");
  }

  createPricingPlan() {
    throw new Error("Method not implemented");
  }
}

// Concrete Factories
class StandardCarFactory extends VehicleRentalFactory {
  createVehicle(model) {
    return new StandardCar(model);
  }

  createPricingPlan() {
    return new StandardCarPricing();
  }
}

class PremiumCarFactory extends VehicleRentalFactory {
  createVehicle(model) {
    return new PremiumCar(model);
  }

  createPricingPlan() {
    return new PremiumCarPricing();
  }
}

// Client code
class RentalService {
  constructor(factory) {
    this.factory = factory;
    this.vehicle = null;
    this.pricingPlan = null;
  }

  setupRental(model) {
    this.vehicle = this.factory.createVehicle(model);
    this.pricingPlan = this.factory.createPricingPlan();
  }

  calculateRentalCost(days) {
    return this.pricingPlan.calculateCost(days);
  }

  getVehicleDescription() {
    return this.vehicle.getDescription();
  }
}

// Example usage:
// const standardCarFactory = new StandardCarFactory();
// const premiumCarFactory = new PremiumCarFactory();

// const standardRental = new RentalService(standardCarFactory);
// standardRental.setupRental("Toyota Camry");
// console.log(standardRental.getVehicleDescription());
// console.log(standardRental.calculateRentalCost(3)); // 150

// const premiumRental = new RentalService(premiumCarFactory);
// premiumRental.setupRental("BMW 5 Series");
// console.log(premiumRental.getVehicleDescription());
// console.log(premiumRental.calculateRentalCost(3)); // 240

module.exports = {
  StandardCarFactory,
  PremiumCarFactory,
  RentalService,
};
