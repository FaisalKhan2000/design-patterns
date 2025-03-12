// Target interface expected by the client (e-commerce platform)
interface PaymentProcessor {
  processPayment(amount: number): string;
}

// Third-party payment gateway (Adaptee) with an incompatible interface
class StripePaymentGateway {
  /**
   * makeTransactions
   */
  public makeTransactions(amountInCents: number): string {
    return `Processed payment of ${amountInCents} cents via Stripe.`;
  }
}

// Adapter to make StripePaymentGateway compatible with PaymentProcessor
class StripeAdaptor implements PaymentProcessor {
  private stripe: StripePaymentGateway;

  constructor(stripe: StripePaymentGateway) {
    this.stripe = stripe;
  }

  processPayment(amount: number): string {
    const amountInCents = amount * 100; // Convert dollars to cents
    return this.stripe.makeTransactions(amountInCents);
  }
}

function main() {
  const stripeGateway = new StripePaymentGateway(); // Create an instance of StripePaymentGateway
  const stripeAdaptor = new StripeAdaptor(stripeGateway); // Create an instance of StripeAdaptor

  console.log(stripeAdaptor.processPayment(100)); // Process payment of 100 dollars
}

main();
