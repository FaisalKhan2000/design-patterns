// Target interface that the client expects to use
interface PaymentProcessor {
  processPayment(amount: number): string;
}

// Adaptee class that has a different interface
class PaypalPaymentGateway {
  /**
   * Method to process payment in the PaypalPaymentGateway
   * @param amount - The amount to be processed
   * @param currency - The currency in which the amount is processed
   * @returns A string message indicating the payment status
   */
  public sendPayment(amount: number, currency: string): string {
    return `Processed payment of ${amount} ${currency} via PayPal.`;
  }
}

// Adapter class that implements the target interface and translates the request to the adaptee
class PaypalAdaptor implements PaymentProcessor {
  private paypal: PaypalPaymentGateway;

  constructor(paypal: PaypalPaymentGateway) {
    this.paypal = paypal;
  }

  // Method to process payment using the adaptee's method
  processPayment(amount: number): string {
    return this.paypal.sendPayment(amount, "USD");
  }
}

// Client code that uses the target interface
function main() {
  const paypalGateway = new PaypalPaymentGateway();
  const paypalAdaptor = new PaypalAdaptor(paypalGateway);
  console.log(paypalAdaptor.processPayment(1000));
}

// Execute the client code
main();
