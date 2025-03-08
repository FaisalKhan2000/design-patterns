# **Simple Factory Pattern**

The **Simple Factory pattern** is a **creational design pattern** that provides a way to create objects **without specifying their concrete classes**. It encapsulates the object creation logic in a **single location** (the "factory"), making it easier to **manage and modify** the creation process.

While the Simple Factory pattern is **not** one of the "Gang of Four" design patterns, it is a widely used approach—often serving as a **stepping stone** to more advanced factory patterns like the **Factory Method** and **Abstract Factory**.

## **Key Concepts**

- **Factory:**  
  A function or a method that is responsible for creating objects.

- **Product:**  
  The object that the factory creates. A factory can produce multiple types of products.

- **Client:**  
  The code that **requests** instances of products from the factory, without needing to know their exact implementation.
