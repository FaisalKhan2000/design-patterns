# Abstract Factory Pattern

The **Abstract Factory pattern** is a **creational design pattern** that provides an interface for creating _families_ of related or dependent objects without specifying their concrete classes. It's one of the "Gang of Four" (GoF) design patterns. The Abstract Factory is like a "factory of factories." It groups together individual factories (which often use the Factory Method pattern internally) that have a common theme.

## Key Concepts

- **Abstract Factory:** Declares an interface for operations that create abstract product objects. This is the "factory of factories."
- **Concrete Factory:** Implements the operations to create concrete product objects. Each concrete factory creates a specific _family_ of products.
- **Abstract Product:** Declares an interface for a type of product object.
- **Concrete Product:** Defines a product object to be created by the corresponding concrete factory and implements the Abstract Product interface.
- **Client:** Uses only interfaces declared by Abstract Factory and Abstract Product classes.
