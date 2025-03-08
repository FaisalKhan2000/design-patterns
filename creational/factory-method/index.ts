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

abstract class PaymentProcessorCreator {
  abstract createProcessor(): IPaymentProcessor;

  // common method for all factories
  process(amount: number): void {
    const processor = this.createProcessor();
    processor.processPayment(amount);
  }
}

class CreditCardFactory extends PaymentProcessorCreator {
  createProcessor(): IPaymentProcessor {
    return new CreditCardProcessor();
  }
}

class PaypalFactory extends PaymentProcessorCreator {
  createProcessor(): IPaymentProcessor {
    return new PaypalProcessor();
  }
}

class CryptoFactory extends PaymentProcessorCreator {
  createProcessor(): IPaymentProcessor {
    return new CryptoProcessor();
  }
}

// ✅ Client Code
function main() {
  const creditCardFactory = new CreditCardFactory();
  creditCardFactory.process(100);

  const paypalFactory = new PaypalFactory();
  paypalFactory.process(50);

  const cryptoFactory = new CryptoFactory();
  cryptoFactory.process(200);
}

main();
