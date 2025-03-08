enum Payment {
  credit = "credit",
  paypal = "paypal",
  crypto = "crypto",
  bank = "bank",
}

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

// Default Processor for handling invalid cases
class DefaultProcessor implements IPaymentProcessor {
  private static loggedTypes = new Set<string>(); // Stores invalid types that were already logged

  constructor(private invalidType: string) {
    if (!DefaultProcessor.loggedTypes.has(invalidType)) {
      console.log(
        `Invalid payment type: ${invalidType}. Using Credit Card as fallback.`
      );
      DefaultProcessor.loggedTypes.add(invalidType);
    }
  }

  processPayment(amount: number): void {
    console.log(`Processing ${amount} via Default (Credit Card).`);
  }
}

// Factory
class PaymentProcessorFactory {
  static createPayment(type: string): IPaymentProcessor {
    switch (type.toLowerCase()) {
      case Payment.credit:
        return new CreditCardProcessor();
      case Payment.paypal:
        return new PaypalProcessor();
      case Payment.crypto:
        return new CryptoProcessor();
      case Payment.bank:
        return new BankProcessor();
      default:
        return new DefaultProcessor(type);
    }
  }
}
// Client Code
const payment1 = PaymentProcessorFactory.createPayment(Payment.credit);
payment1.processPayment(100);

const payment2 = PaymentProcessorFactory.createPayment(Payment.paypal);
payment2.processPayment(50);

const payment3 = PaymentProcessorFactory.createPayment(Payment.crypto);
payment3.processPayment(200);

const payment4 = PaymentProcessorFactory.createPayment(Payment.bank);
payment4.processPayment(500);

// Invalid payment type
const paymentInvalid1 = PaymentProcessorFactory.createPayment("random");
paymentInvalid1.processPayment(100);

const paymentInvalid2 = PaymentProcessorFactory.createPayment("random");
paymentInvalid2.processPayment(150);

const paymentInvalid3 = PaymentProcessorFactory.createPayment("invalidtype");
paymentInvalid3.processPayment(200);
