/*

Factory Method: The Smartphone Factory Expands

Definition
The Factory Method pattern is a creational design pattern that defines an interface (or abstract class) for creating objects, but lets subclasses decide which specific class to instantiate. Unlike the Simple Factory, where a single factory handles all object creation, the Factory Method pattern delegates object creation to specialized factories, each responsible for producing a specific type of product. This makes the system more flexible, scalable, and easier to extend (e.g., adding new phone brands without modifying existing code).

Scenario
Imagine your small smartphone factory has grown into a global enterprise! Instead of a single production line handling all phone brands, you now have dedicated factories for each brand—Apple has its own high-tech factory, Samsung has its own assembly plant, and so on. Each factory specializes in producing its own brand of phone, following a common set of rules (like a "blueprint" for smartphone production). If you want to introduce a new brand, like Google Pixel, you simply build a new factory for it without disrupting the existing ones.

Key Idea
The Factory Method pattern is like having a "franchise model" for factories. There’s a central "franchise blueprint" (an abstract factory) that defines how factories should operate, but each brand gets its own dedicated factory to handle production. This makes it easy to add new brands or customize production processes without changing the core system.

Real-Life Vibe
Picture a massive industrial park where each building is a specialized factory. One building churns out sleek iPhones with Apple’s signature design, another assembles rugged Samsung phones, and a new building is under construction for Google Pixel phones. Each factory is independent but follows the same high-level standards, ensuring consistency across the board.

*/
/* 
Factory Method: The Smartphone Factory Expands

Scenario: Your smartphone factory has scaled up! Instead of a single production line, you now have dedicated factories for each phone brand. Each factory knows how to produce its specific brand of phone, and new factories can be added easily for new brands.
*/

// Product interface (the "blueprint" for all smartphones)
interface Smartphone {
  getBrand(): string;
  assemble(): string; // Added for creative flair—describes the assembly process
}

// Concrete products (specific phone brands)
class Iphone implements Smartphone {
  getBrand(): string {
    return "iPhone";
  }

  assemble(): string {
    return "Assembling iPhone with precision-engineered parts and a sleek aluminum frame.";
  }
}

class Samsung implements Smartphone {
  getBrand(): string {
    return "Samsung";
  }

  assemble(): string {
    return "Assembling Samsung with a vibrant AMOLED display and rugged durability.";
  }
}

class GooglePixel implements Smartphone {
  // New brand added easily!
  getBrand(): string {
    return "Google Pixel";
  }

  assemble(): string {
    return "Assembling Google Pixel with AI-powered features and a minimalist design.";
  }
}

// Abstract Factory (the "franchise blueprint" for all factories)
abstract class SmartphoneFactory {
  // The factory method that subclasses must implement
  abstract createPhone(): Smartphone;

  // A common method that uses the factory method to produce and assemble a phone
  producePhone(): string {
    const phone = this.createPhone(); // Delegate creation to subclass
    return `Factory producing ${phone.getBrand()}: ${phone.assemble()}`;
  }
}

// Concrete Factories (dedicated factories for each brand)
class IphoneFactory extends SmartphoneFactory {
  createPhone(): Smartphone {
    return new Iphone();
  }
}

class SamsungFactory extends SmartphoneFactory {
  createPhone(): Smartphone {
    return new Samsung();
  }
}

class GooglePixelFactory extends SmartphoneFactory {
  // New factory for a new brand
  createPhone(): Smartphone {
    return new GooglePixel();
  }
}

// Usage
try {
  // Create factories for each brand
  const iphoneFactory = new IphoneFactory();
  const samsungFactory = new SamsungFactory();
  const pixelFactory = new GooglePixelFactory();

  // Produce phones using the factories
  console.log(iphoneFactory.producePhone());
  // Output: Factory producing iPhone: Assembling iPhone with precision-engineered parts and a sleek aluminum frame.

  console.log(samsungFactory.producePhone());
  // Output: Factory producing Samsung: Assembling Samsung with a vibrant AMOLED display and rugged durability.

  console.log(pixelFactory.producePhone());
  // Output: Factory producing Google Pixel: Assembling Google Pixel with AI-powered features and a minimalist design.
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log("An unknown error occured");
  }
}
