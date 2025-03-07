/*
3.2. Subclassing Singletons (Example: Different Logger Types)

This demonstrates a more complex scenario where you might have different types
of loggers (e.g., FileLogger, ConsoleLogger) that all need to be Singletons.
We use a base class with a static registry.

*/

abstract class BaseLogger {
  // Make registry static on BaseLogger to be accessible from all subclasses
  private static registry = new Map<any, BaseLogger>();

  protected constructor() {
    console.log("BaseLogger initialized.");
    // Protected constructor to prevent direct instantiation of BaseLogger
  }

  // Simplify the type signature to avoid the constructor visibility issue
  public static getInstance<T extends BaseLogger>(this: any): T {
    const key = this;
    if (!BaseLogger.registry.has(key)) {
      BaseLogger.registry.set(key, new this());
    }
    return BaseLogger.registry.get(key) as T;
  }

  public abstract log(message: string): void; // Abstract method - must be implemented by subclasses
}

class ConsoleLogger extends BaseLogger {
  protected constructor() {
    super();
    console.log("ConsoleLogger initialized.");
  }

  public log(message: string): void {
    console.log(`ConsoleLogger: ${message}`);
  }
}

class ErrorLogger extends BaseLogger {
  protected constructor() {
    super();
    console.log("ErrorLogger initialized.");
  }

  public log(message: string): void {
    console.error(`ErrorLogger: ${message}`);
  }
}

// Usage
const consoleLogger = ConsoleLogger.getInstance();
consoleLogger.log("Hello, World!");

const errorLogger = ErrorLogger.getInstance();
errorLogger.log("Uh-oh! Something went wrong.");

console.log(consoleLogger === errorLogger); // Output: false (different instances)
// const baseLogger = BaseLogger.getInstance(); // Error - Cannot create an instance of an abstract class.
