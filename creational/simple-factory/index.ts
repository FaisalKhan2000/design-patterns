/*

Simple Factory: The Smartphone Factory

Definition
The Simple Factory pattern is a creational design pattern that provides a single, centralized class or method (the "factory") responsible for creating objects based on input parameters. It encapsulates object creation logic, allowing clients to request objects without knowing the details of how they’re instantiated. While not one of the official Gang of Four design patterns, it’s a lightweight and practical approach for basic object creation scenarios.

Scenario
Imagine a small smartphone factory where a single production line (the "worker") assembles either an iPhone or a Samsung phone based on customer orders. The production line knows how to build both types of phones but isn’t equipped for complex customizations or new brands without retooling.

Key Idea
The factory acts as a central hub that decides which phone to produce and delivers it to the customer. It’s straightforward and efficient for simple needs but lacks flexibility if the factory wants to scale up (e.g., adding new phone brands like Google Pixel or advanced models with specific features).

Real-Life Vibe
Picture a local manufacturing unit that churns out basic smartphones on demand—nothing fancy, just reliable assembly based on what’s ordered.

*/

// Product interface
interface Smartphone {
  getBrand(): string;
}

// Concrete products
class Iphone implements Smartphone {
  getBrand(): string {
    return "iPhone";
  }
}

class Samsung implements Smartphone {
  getBrand(): string {
    return "samsung";
  }
}

// Simple factory
class SmartphoneFactory {
  static createPhone(type: string): Smartphone {
    switch (type.toLowerCase()) {
      case "iphone":
        return new Iphone();
      case "samsung":
        return new Samsung();
      default:
        throw new Error("Unknown phone type");
    }
  }
}

// Usage
try {
  const phone1 = SmartphoneFactory.createPhone("iphone");
  console.log(phone1.getBrand()); // Output: iPhone

  const phone2 = SmartphoneFactory.createPhone("samsung");
  console.log(phone2.getBrand()); // Output: Samsung

  // This will throw an error
  const phone3 = SmartphoneFactory.createPhone("nokia");
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message as string); // Output: Unknown phone type...
  } else {
    console.log("An unknown error occured");
  }
}
