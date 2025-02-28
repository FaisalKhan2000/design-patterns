// Abstract base class that defines the interface for all logger types
class Logger {
  log(message) {} // Abstract method to be implemented by concrete classes
}

// Concrete implementation for console logging
class ConsoleLogger extends Logger {
  log(message) {
    console.log(`[Console]: ${message}`);
  }
}

// Concrete implementation for file logging
class FileLogger extends Logger {
  log(message) {
    console.log(`[File]: Writing to file: ${message}`);
  }
}

// Concrete implementation for database logging
class DatabaseLogger extends Logger {
  log(message) {
    console.log(`[Database]: Storing in DB: ${message}`);
  }
}

// Simple Factory class that encapsulates object creation logic
// This pattern provides a way to create objects without exposing the creation logic
class SimpleLoggerFactory {
  // Factory method that creates and returns specific logger instances
  // @param {string} type - The type of logger to create
  // @returns {Logger} - Instance of the specified logger
  createLogger(type) {
    switch (type) {
      case "console":
        return new ConsoleLogger();
      case "file":
        return new FileLogger();
      case "database":
        return new DatabaseLogger();
      default:
        throw new Error("Invalid logger type");
    }
  }
}

// Example usage of the Simple Factory pattern
const factory = new SimpleLoggerFactory();

// Create different types of loggers using the factory
const consoleLogger = factory.createLogger("console");
const fileLogger = factory.createLogger("file");

// Use the created loggers
consoleLogger.log("Hello from console");
fileLogger.log("Hello from file");
