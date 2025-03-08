# Factory Method Pattern

The **Factory Method pattern** is a **creational design pattern** that provides an interface for creating objects in a superclass, but allows subclasses (concrete creators) to alter the type of objects that will be created. It's one of the "Gang of Four" (GoF) design patterns. Unlike the Simple Factory, which encapsulates object creation in a single function or class, the Factory Method pattern uses _inheritance_ to delegate object creation to subclasses.

## Key Concepts

- **Product:** Defines the interface of objects the factory method creates. This is often an abstract class or an interface.
- **ConcreteProduct:** Implements the Product interface. These are the actual objects created by the factory methods.
- **Creator:** Declares the factory method, which returns an object of type Product. The Creator may also define a default implementation of the factory method. This is often an abstract class.
- **ConcreteCreator:** Overrides the factory method to return an instance of a ConcreteProduct.
