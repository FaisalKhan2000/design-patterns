# Factory Design Patterns in JavaScript

This directory contains implementations of three different factory patterns:

## 1. Simple Factory

The Simple Factory Pattern provides a centralized way to create objects without exposing the creation logic to the client. It encapsulates object creation in a single class.

Key components:

- `SimpleLoggerFactory`: Creates different logger types based on input
- Supported loggers: Console, File, and Database

## 2. Factory Method

The Factory Method Pattern defines an interface for creating objects but lets subclasses decide which class to instantiate. It enables flexible and decoupled object creation.

Key components:

- Abstract `LoggerFactory` class with factory method
- Concrete factories: `ConsoleLoggerFactory`, `FileLoggerFactory`
- Each factory creates its specific logger type

## 3. Abstract Factory

The Abstract Factory Pattern provides an interface for creating families of related objects without specifying their concrete classes. It's useful when you need to ensure that created objects work together.

Key components:

- Abstract products: Logger, Formatter, Filter
- Concrete implementations for Dev and Prod environments
- Factories create complete families of related objects

## Usage Examples

Check the individual files for detailed implementation and usage examples:

- `simple_factory.js`
- `factory_method.js`
- `abstract_factory.js`

Each pattern serves different complexity levels and use cases:

- Simple Factory: Basic object creation
- Factory Method: Flexible object creation through inheritance
- Abstract Factory: Creation of families of related objects
