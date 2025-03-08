interface Smartphone {
  getBrand(): string;
}

interface Smartwatch {
  getBrand(): string;
}

interface Earbuds {
  getBrand(): string;
}

class Iphone implements Smartphone {
  getBrand(): string {
    return "iPhone";
  }
}

class AppleWatch implements Smartwatch {
  getBrand(): string {
    return "Apple Watch";
  }
}

class AirPods implements Earbuds {
  getBrand(): string {
    return "Airpods";
  }
}

interface EcosystemFactory {
  createPhone(): Smartphone;
  createWatch(): Smartwatch;
  createEarbuds(): Earbuds;
}

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

// Usage (ordering an entire ecosystem)
function orderEcosystem(factory: EcosystemFactory) {
  const phone = factory.createPhone();
  const watch = factory.createWatch();
  const earbuds = factory.createEarbuds();

  console.log(`Ordering ${phone.getBrand()} ecosystem:`);
  console.log(phone.getBrand());
  console.log(watch.getBrand());
  console.log(earbuds.getBrand());
  console.log("---");
}

try {
  // Order Apple ecosystem
  const appleFactory = new AppleEcosystemFactory();
  orderEcosystem(appleFactory);
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log("An unknown error occured");
  }
}
