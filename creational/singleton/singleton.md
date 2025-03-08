## 1. Introduction to the Singleton Pattern

The Singleton pattern is a creational design pattern that ensures a class has
only _one_ instance and provides a _global point of access_ to that instance.

### Purpose:

- Restrict the instantiation of a class to a single object.
- Provide a global, well-defined access point to that single instance.

### Key Features:

- Private constructor: Prevents direct instantiation from outside the class.
- Static instance variable: Holds the single instance of the class.
- Static access method (usually named `getInstance()`): Provides a way to
  get the single instance, creating it if it doesn't already exist.

### Use Cases:

- Managing access to a shared resource (e.g., database connection, logger,
  configuration settings).
- When you need to ensure that only one object of a particular class exists
  throughout the application's lifecycle.
- Centralized management of a global state.

### Real-world Analogy:

The president of a country. There can only be one
president at any given time, and there's a defined way to access the _current_
president.

## 4. Best Practices and Alternatives

- **Use Sparingly:** Singletons can make testing difficult and introduce tight
  coupling. Use them judiciously, only when truly necessary.
- **Consider Dependency Injection:** Instead of using a global Singleton,
  consider using dependency injection to provide dependencies to classes that
  need them. This improves testability and flexibility.
- **Module-Based Singletons:** In many cases, module-based singletons (exporting
  a single instance) are a simpler and cleaner alternative to the classic
  Singleton pattern in JavaScript/TypeScript.
- **Testability:** Singletons can make unit testing harder because they
  introduce global state. Consider using techniques like mocking or dependency
  injection to isolate the Singleton for testing.
- **Lazy Initialization vs Eager Initialization:** Choose the appropriate
  initialization strategy based on your application's needs. Lazy initialization
  is generally preferred unless you have a specific reason to create the
  instance eagerly.
