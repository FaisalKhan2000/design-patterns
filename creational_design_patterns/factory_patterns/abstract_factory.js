// Abstract Factory Pattern

// Abstract Products (Interfaces)
// These define a common interface that all concrete products must implement.
class Logger {
  log(message) {} // Abstract method
}

class Formatter {
  format(message) {} // Abstract method
}

class Filter {
  filter(message) {} // Abstract method
}

// Concrete Products for Development Environment
class DevLogger extends Logger {
  log(message) {
    console.log(`[DEV_LOG]: ${message}`);
  }
}

class DevFormatter extends Formatter {
  format(message) {
    return `DEV_FORMAT: ${message} (timestamp: ${new Date().toISOString()})`;
  }
}

class DevFilter extends Filter {
  filter(message) {
    return `[DEV_FILTER] ${message}`;
  }
}

// Concrete Products for Production Environment
class ProdLogger extends Logger {
  log(message) {
    console.log(`[PROD_LOG]: ${message}`);
  }
}

class ProdFormatter extends Formatter {
  format(message) {
    return `PROD_FORMAT: ${message} (secure-timestamp: ${Date.now()})`;
  }
}

class ProdFilter extends Filter {
  filter(message) {
    return `[PROD_FILTER] ${message.replace(/error/gi, "[ERR]")}`; // Example of modifying messages in production
  }
}

// Abstract Factory
// Defines an interface for creating families of related objects
class LoggerFactory {
  createLogger() {} // Abstract method
  createFormatter() {} // Abstract method
  createFilter() {} // Abstract method
}

// Concrete Factory for Development Environment
class DevLoggerFactory extends LoggerFactory {
  createLogger() {
    return new DevLogger();
  }
  createFormatter() {
    return new DevFormatter();
  }
  createFilter() {
    return new DevFilter();
  }
}

// Concrete Factory for Production Environment
class ProdLoggerFactory extends LoggerFactory {
  createLogger() {
    return new ProdLogger();
  }
  createFormatter() {
    return new ProdFormatter();
  }
  createFilter() {
    return new ProdFilter();
  }
}

// Client Code
// This function accepts a factory and creates a logging system using the factory methods.
function createLoggingSystem(factory) {
  const logger = factory.createLogger();
  const formatter = factory.createFormatter();
  const filter = factory.createFilter();

  return {
    logMessage(message) {
      const filtered = filter.filter(message); // Step 1: Filter the message
      const formatted = formatter.format(filtered); // Step 2: Format the message
      logger.log(formatted); // Step 3: Log the message
    },
  };
}

// Usage Example

console.log("Development Environment:");
const devLogging = createLoggingSystem(new DevLoggerFactory());
devLogging.logMessage("Test error message"); // Expected output: Development-style logging

console.log("\nProduction Environment:");
const prodLogging = createLoggingSystem(new ProdLoggerFactory());
prodLogging.logMessage("Test error message"); // Expected output: Production-style logging
