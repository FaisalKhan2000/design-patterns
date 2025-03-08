// Payment Processor Interface
interface IPaymentProcessor {
  processPayment(amount: number): void;
}

// Concrete Products
class CreditCardProcessor implements IPaymentProcessor {
  constructor() {
    console.log("CreditCard Processor initiated");
  }
  processPayment(amount: number): void {
    console.log(`Processing ${amount} via Credit Card.`);
  }
}

class PaypalProcessor implements IPaymentProcessor {
  constructor() {
    console.log("Paypal Processor initiated");
  }
  processPayment(amount: number): void {
    console.log(`Processing ${amount} via PayPal.`);
  }
}

class CryptoProcessor implements IPaymentProcessor {
  constructor() {
    console.log("Crypto Processor initiated");
  }
  processPayment(amount: number): void {
    console.log(`Processing ${amount} via Cryptocurrency.`);
  }
}

class BankProcessor implements IPaymentProcessor {
  constructor() {
    console.log("Bank Transfer Processor initiated");
  }
  processPayment(amount: number): void {
    console.log(`Processing ${amount} via Bank Transfer.`);
  }
}

// 🔹 Abstract Factory Interface
interface IPaymentFactory {
  createPrimaryPayment(): IPaymentProcessor;
  createAlternativePayment(): IPaymentProcessor;
}

// 🔹 Concrete Factories

// 🔹 Online Payment Factory (Credit Card + PayPal)
class OnlinePaymentFactory implements IPaymentFactory {
  createPrimaryPayment(): IPaymentProcessor {
    return new CreditCardProcessor();
  }
  createAlternativePayment(): IPaymentProcessor {
    return new PaypalProcessor();
  }
}

// 🔹 Crypto Payment Factory (Crypto + PayPal)
class CryptoPaymentFactory implements IPaymentFactory {
  createPrimaryPayment(): IPaymentProcessor {
    return new CryptoProcessor();
  }
  createAlternativePayment(): IPaymentProcessor {
    return new PaypalProcessor();
  }
}

// 🔹 Bank Payment Factory (Bank Transfer + Credit Card)
class BankPaymentFactory implements IPaymentFactory {
  createPrimaryPayment(): IPaymentProcessor {
    return new BankProcessor();
  }
  createAlternativePayment(): IPaymentProcessor {
    return new CreditCardProcessor();
  }
}

// ✅ Client Code
function processPayments(factory: IPaymentFactory, amount: number) {
  const primary = factory.createPrimaryPayment();
  primary.processPayment(amount);

  const alternative = factory.createAlternativePayment();
  alternative.processPayment(amount);
}

// Using different factories
console.log("=== Online Payment ===");
processPayments(new OnlinePaymentFactory(), 100);

console.log("\n=== Crypto Payment ===");
processPayments(new CryptoPaymentFactory(), 200);

console.log("\n=== Bank Payment ===");
processPayments(new BankPaymentFactory(), 300);
