/*

Abstract Factory: The Smartphone Ecosystem Empire
Definition

Abstract Factory is a creational design pattern that provides an interface for creating families of related objects without specifying their concrete classes.

The Abstract Factory pattern is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes. Unlike the Factory Method, which focuses on creating a single type of product (e.g., smartphones), the Abstract Factory creates a whole ecosystem of related products (e.g., smartphones, smartwatches, and earbuds) that work together. It ensures consistency across product families while allowing easy swapping of entire ecosystems.

Scenario
Your smartphone factory empire has evolved beyond just phones! Now, you’re a global tech conglomerate that produces entire ecosystems of devices—smartphones, smartwatches, and wireless earbuds—for each brand. For example, Apple has its ecosystem (iPhone, Apple Watch, AirPods), Samsung has its own (Samsung phone, Galaxy Watch, Galaxy Buds), and Google is entering the market with its ecosystem (Pixel phone, Pixel Watch, Pixel Buds). Each ecosystem’s devices are designed to work seamlessly together, but they’re not interchangeable across brands (e.g., AirPods don’t pair as well with a Samsung phone).

Your challenge is to ensure that when a customer orders an "Apple ecosystem," they get all Apple-branded devices, and when they order a "Samsung ecosystem," they get all Samsung-branded devices. The Abstract Factory pattern helps you achieve this by grouping related products into families and providing a single factory to produce the entire family.

Key Idea
The Abstract Factory is like a "super factory" that oversees the production of an entire product lineup for a brand. Instead of having separate factories for phones, watches, and earbuds, you have one factory per brand that produces the whole ecosystem. This ensures consistency (e.g., all Apple devices use the same design language) and makes it easy to add new brands or product types.

Real-Life Vibe
Picture a massive tech campus with giant "ecosystem hubs"—one for Apple, one for Samsung, one for Google. Each hub has assembly lines for phones, watches, and earbuds, all coordinated to produce a cohesive set of devices. If a customer walks into the Apple hub, they leave with an iPhone, Apple Watch, and AirPods, all perfectly synced. If a new brand like Xiaomi enters the market, you just build a new hub, and it starts producing its own ecosystem without disrupting the others.

*/

/* 
Abstract Factory: The Smartphone Ecosystem Empire

Scenario: Your factory empire now produces entire ecosystems of devices—smartphones, smartwatches, and earbuds—for each brand. Each brand has its own "ecosystem hub" (factory) that ensures all devices are consistent and work together seamlessly.
*/

// Product interfaces (blueprints for each type of device)
interface Smartphone {
  getBrand(): string;
  syncWithEcosystem(): string; // Added for creative flair—shows ecosystem integration
}

interface Smartwatch {
  getBrand(): string;
  syncWithEcosystem(): string;
}

interface Earbuds {
  getBrand(): string;
  syncWithEcosystem(): string;
}

// Concrete products for Apple ecosystem
class Iphone implements Smartphone {
  getBrand(): string {
    return "iPhone";
  }

  syncWithEcosystem(): string {
    return "iPhone syncing seamlessly with Apple ecosystem via iCloud.";
  }
}

class AppleWatch implements Smartwatch {
  getBrand(): string {
    return "Apple Watch";
  }

  syncWithEcosystem(): string {
    return "Apple Watch syncing health data with iPhone.";
  }
}

class AirPods implements Earbuds {
  getBrand(): string {
    return "AirPods";
  }

  syncWithEcosystem(): string {
    return "AirPods auto-pairing with iPhone and Apple Watch.";
  }
}

// Concrete products for Samsung ecosystem
class SamsungPhone implements Smartphone {
  getBrand(): string {
    return "Samsung";
  }

  syncWithEcosystem(): string {
    return "Samsung syncing with Galaxy ecosystem via Samsung Cloud.";
  }
}

class GalaxyWatch implements Smartwatch {
  getBrand(): string {
    return "Galaxy Watch";
  }

  syncWithEcosystem(): string {
    return "Galaxy Watch syncing fitness data with Samsung phone.";
  }
}

class GalaxyBuds implements Earbuds {
  getBrand(): string {
    return "Galaxy Buds";
  }

  syncWithEcosystem(): string {
    return "Galaxy Buds auto-pairing with Samsung phone and Galaxy Watch.";
  }
}

// Concrete products for Google ecosystem (new brand added easily!)
class PixelPhone implements Smartphone {
  getBrand(): string {
    return "Google Pixel";
  }

  syncWithEcosystem(): string {
    return "Pixel syncing with Google ecosystem via Google One.";
  }
}

class PixelWatch implements Smartwatch {
  getBrand(): string {
    return "Pixel Watch";
  }

  syncWithEcosystem(): string {
    return "Pixel Watch syncing fitness data with Pixel phone.";
  }
}

class PixelBuds implements Earbuds {
  getBrand(): string {
    return "Pixel Buds";
  }

  syncWithEcosystem(): string {
    return "Pixel Buds auto-pairing with Pixel phone and Pixel Watch.";
  }
}

// Abstract Factory (the "ecosystem hub" blueprint)
interface EcosystemFactory {
  createPhone(): Smartphone;
  createWatch(): Smartwatch;
  createEarbuds(): Earbuds;
}

// Concrete Factories (dedicated hubs for each brand’s ecosystem)
class AppleEcosystemFactory implements EcosystemFactory {
  createPhone(): Smartphone {
    return new Iphone();
  }

  createWatch(): Smartwatch {
    return new AppleWatch();
  }

  createEarbuds(): Earbuds {
    return new AirPods();
  }
}

class SamsungEcosystemFactory implements EcosystemFactory {
  createPhone(): Smartphone {
    return new SamsungPhone();
  }

  createWatch(): Smartwatch {
    return new GalaxyWatch();
  }

  createEarbuds(): Earbuds {
    return new GalaxyBuds();
  }
}

class GoogleEcosystemFactory implements EcosystemFactory {
  createPhone(): Smartphone {
    return new PixelPhone();
  }

  createWatch(): Smartwatch {
    return new PixelWatch();
  }

  createEarbuds(): Earbuds {
    return new PixelBuds();
  }
}

// Usage (ordering an entire ecosystem)
function orderEcosystem(factory: EcosystemFactory) {
  const phone = factory.createPhone();
  const watch = factory.createWatch();
  const earbuds = factory.createEarbuds();

  console.log(`Ordering ${phone.getBrand()} ecosystem:`);
  console.log(phone.syncWithEcosystem());
  console.log(watch.syncWithEcosystem());
  console.log(earbuds.syncWithEcosystem());
  console.log("---");
}

try {
  // Order Apple ecosystem
  const appleFactory = new AppleEcosystemFactory();
  orderEcosystem(appleFactory);

  // Order Samsung ecosystem
  const samsungFactory = new SamsungEcosystemFactory();
  orderEcosystem(samsungFactory);

  // Order Google ecosystem (new brand added easily!)
  const googleFactory = new GoogleEcosystemFactory();
  orderEcosystem(googleFactory);
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log("An unknown error occured");
  }
}

/* Output:
Ordering iPhone ecosystem:
iPhone syncing seamlessly with Apple ecosystem via iCloud.
Apple Watch syncing health data with iPhone.
AirPods auto-pairing with iPhone and Apple Watch.
---
Ordering Samsung ecosystem:
Samsung syncing with Galaxy ecosystem via Samsung Cloud.
Galaxy Watch syncing fitness data with Samsung phone.
Galaxy Buds auto-pairing with Samsung phone and Galaxy Watch.
---
Ordering Google Pixel ecosystem:
Pixel syncing with Google ecosystem via Google One.
Pixel Watch syncing fitness data with Pixel phone.
Pixel Buds auto-pairing with Pixel phone and Pixel Watch.
---
*/
