/*

Builder: The Custom Smartphone Workshop
Definition
The Builder pattern is a creational design pattern that allows step-by-step construction of complex objects, ensuring readability, flexibility, and avoiding constructor overloads

The Builder pattern is a creational design pattern used to construct complex objects step by step. Instead of using a large constructor with many parameters, it allows us to create objects in a structured and readable way.

Scenario
Your smartphone factory empire has decided to open a new division: a "Custom Smartphone Workshop." Here, customers can design their dream smartphones by choosing specific components like the screen size, battery capacity, camera quality, and storage capacity. Instead of producing pre-configured phones, the workshop lets customers build their phones step-by-step, ensuring they only add the features they want. For example, one customer might want a compact iPhone with a huge battery, while another wants a Samsung with a massive screen and top-tier camera.

The challenge is to avoid a "monster constructor" with dozens of parameters (e.g., new Smartphone(screenSize, battery, camera, storage, ...)), which would be hard to use and error-prone. The Builder pattern solves this by providing a "smartphone builder" that lets customers add components one at a time, then assembles the final phone when they’re ready.

Key Idea
The Builder pattern is like a custom car workshop where you pick and choose parts (engine, wheels, paint color) to build your dream car. In the smartphone context, the builder acts as a "construction manager" that collects all the customer’s choices and assembles the final phone, ensuring the process is flexible, readable, and easy to extend (e.g., adding new components like waterproofing or foldable screens).

Real-Life Vibe
Picture a high-tech workshop with a friendly robot assistant (the builder). You walk in, and the robot asks, “What screen size would you like? What about battery capacity? Any special camera features?” You answer step-by-step, and when you’re done, the robot assembles your custom smartphone, perfectly tailored to your needs. If a new feature like augmented reality (AR) cameras becomes available, the workshop can easily add it to the menu without changing how existing phones are built.

*/

/* 
Builder: The Custom Smartphone Workshop

Scenario: Your factory empire now offers a custom smartphone workshop where customers can design their dream phones by choosing specific components step-by-step. The builder pattern ensures the construction process is flexible and easy to use.
*/

// Product (the complex object being built)
class Smartphone {
  private screenSize: string = "Not set";
  private battery: string = "Not set";
  private camera: string = "Not set";
  private storage: string = "Not set";
  private processor: string = "Not set"; // Set a default value

  setScreenSize(screenSize: string): void {
    this.screenSize = screenSize;
  }

  setBattery(battery: string): void {
    this.battery = battery;
  }

  setCamera(camera: string): void {
    this.camera = camera;
  }

  setStorage(storage: string): void {
    this.storage = storage;
  }

  setProcessor(processor: string): void {
    this.processor = processor;
  }

  describe(): string {
    return `📱 Smartphone Configuration:
- Screen: ${this.screenSize}
- Battery: ${this.battery}
- Camera: ${this.camera}
- Storage: ${this.storage}
- Processor: ${this.processor}`;
  }
}

// Concrete Builder (the robot assistant in the workshop)
class SmartphoneBuilder {
  private smartphone: Smartphone;

  constructor() {
    this.smartphone = new Smartphone();
  }

  setScreenSize(screenSize: string): SmartphoneBuilder {
    this.smartphone.setScreenSize(screenSize);
    return this; // Return this for method chaining
  }

  setBattery(battery: string): SmartphoneBuilder {
    this.smartphone.setBattery(battery);
    return this;
  }

  setCamera(camera: string): SmartphoneBuilder {
    this.smartphone.setCamera(camera);
    return this;
  }

  setStorage(storage: string): SmartphoneBuilder {
    this.smartphone.setStorage(storage);
    return this;
  }

  setProcessor(processor: string): SmartphoneBuilder {
    this.smartphone.setProcessor(processor);
    return this;
  }

  build(): Smartphone {
    return this.smartphone;
  }
}

// Director (optional, but adds creative flair—the "workshop manager")
class WorkshopManager {
  private builder: SmartphoneBuilder;

  constructor(builder: SmartphoneBuilder) {
    this.builder = builder;
  }

  // Pre-configured build methods for common customer requests
  buildCompactPhone(): Smartphone {
    return this.builder
      .setScreenSize("5.8 inches")
      .setBattery("3000 mAh")
      .setCamera("12 MP Dual Camera")
      .setStorage("64 GB")
      .build();
  }

  buildPowerUserPhone(): Smartphone {
    return this.builder
      .setScreenSize("6.8 inches")
      .setBattery("5000 mAh")
      .setCamera("108 MP Triple Camera")
      .setStorage("256 GB")
      .build();
  }
}

// Usage
try {
  // Scenario 1: Customer builds a fully custom phone
  const customBuilder = new SmartphoneBuilder();
  const customPhone = customBuilder
    .setScreenSize("6.1 inches")
    .setBattery("4000 mAh")
    .setCamera("48 MP Wide Camera")
    .setStorage("128 GB")
    .build();
  console.log("Customer's Custom Phone:");
  console.log(customPhone.describe());
  console.log("---");

  // Scenario 2: Workshop manager builds pre-configured phones
  const workshopBuilder = new SmartphoneBuilder();
  const manager = new WorkshopManager(workshopBuilder);

  const compactPhone = manager.buildCompactPhone();
  console.log("Workshop Manager's Compact Phone:");
  console.log(compactPhone.describe());
  console.log("---");

  const powerUserPhone = manager.buildPowerUserPhone();
  console.log("Workshop Manager's Power User Phone:");
  console.log(powerUserPhone.describe());
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}

/* Output:
Customer's Custom Phone:
Custom Smartphone Configuration:
- Screen Size: 6.1 inches
- Battery: 4000 mAh
- Camera: 48 MP Wide Camera
- Storage: 128 GB
---
Workshop Manager's Compact Phone:
Custom Smartphone Configuration:
- Screen Size: 5.8 inches
- Battery: 3000 mAh
- Camera: 12 MP Dual Camera
- Storage: 64 GB
---
Workshop Manager's Power User Phone:
Custom Smartphone Configuration:
- Screen Size: 6.8 inches
- Battery: 5000 mAh
- Camera: 108 MP Triple Camera
- Storage: 256 GB
*/
