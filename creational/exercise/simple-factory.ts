/*

🏭 TASK 2: Simple Factory - Basic Smartphone Creator
👉 Create a Simple Factory that returns different smartphone objects based on a type parameter ("budget", "flagship", "gaming").

The factory method should decide which class to instantiate based on the input.
Example:
ts
Copy
Edit
SmartphoneFactory.create("gaming"); // Returns a high-performance gaming phone


*/
interface Smartphone {
  getSmartphone(name: string): string;
}

class Budget implements Smartphone {
  constructor() {
    console.log("This is a budget smartphone");
  }
  getSmartphone(name: string): string {
    return name;
  }
}

class Flagship implements Smartphone {
  constructor() {
    console.log("This is a flagship smartphone");
  }
  getSmartphone(name: string): string {
    return name;
  }
}

class Gaming implements Smartphone {
  constructor() {
    console.log("This is a gaming smartphone");
  }
  getSmartphone(name: string): string {
    return name;
  }
}

class SmartphoneFactory {
  public static create(type: string): Smartphone {
    switch (type.toLowerCase()) {
      case "budget":
        return new Budget();
      case "gaming":
        return new Gaming();
      case "flagship":
        return new Flagship();
      default:
        throw new Error(`Unknown smartphone type: ${type}`);
    }
  }
}

// Usage example:
const budgetPhone = SmartphoneFactory.create("budget");
console.log(budgetPhone.getSmartphone("Xiaomi")); // Output: Xiaomi

const gamingPhone = SmartphoneFactory.create("gaming");
console.log(gamingPhone.getSmartphone("Asus ROG")); // Output: Asus ROG

const flagshipPhone = SmartphoneFactory.create("flagship");
console.log(flagshipPhone.getSmartphone("Samsung Galaxy")); // Output: Samsung Galaxy
