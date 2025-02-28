/**
 * Factory Method Pattern
 * This pattern defines an interface for creating objects but lets subclasses decide which class to instantiate.
 */

// Abstract Product: Defines the interface for products
class Logger {
  log(message) {} // Abstract method to be implemented by concrete products
}

// Concrete Product: Specific implementation of the Logger interface
class ConsoleLogger extends Logger {
  log(message) {
    console.log(`[Console]: ${message}`);
  }
}

// Concrete Product: Another specific implementation of the Logger interface
class FileLogger extends Logger {
  log(message) {
    console.log(`[File]: ${message}`);
  }
}

// Abstract Creator: Declares the factory method
class LoggerFactory {
  // Factory Method: Abstract method that will create a Logger object
  createLogger() {
    // Subclasses must implement this method
    throw new Error("createLogger must be implemented");
  }

  // Template method that uses the factory method
  logMessage(message) {
    // Creates a logger using the factory method and uses it
    const logger = this.createLogger();
    logger.log(message);
  }
}

// Concrete Creator: Implements the factory method to create ConsoleLogger
class ConsoleLoggerFactory extends LoggerFactory {
  createLogger() {
    return new ConsoleLogger();
  }
}

// Concrete Creator: Implements the factory method to create FileLogger
class FileLoggerFactory extends LoggerFactory {
  createLogger() {
    return new FileLogger();
  }
}

// Client code: Uses factories to create and work with loggers
function clientCode(factory, message) {
  factory.logMessage(message);
}

// Example usage
clientCode(new ConsoleLoggerFactory(), "Hello using factory method!");
clientCode(new FileLoggerFactory(), "Hello using factory method!");

// Alternative direct usage (commented out to show different approach)
// const factory = new ConsoleLoggerFactory();
// const consoleLogger = factory.createLogger();
