/*

Prototype Pattern: The Clone Factory 🏭
Definition
The Prototype pattern is a creational design pattern that allows objects to be cloned rather than created from scratch. This is useful when object creation is expensive, or we want to create multiple objects with slight variations.

📌 Scenario: The Smartphone Clone Factory
Your smartphone empire has expanded, and now customers want custom smartphone templates that can be reused. Instead of building each phone from scratch, we introduce a "Smartphone Clone Factory" where customers can pick an existing phone model and tweak it slightly.

For example:

A customer loves the iPhone 15 Pro, but wants 1TB of storage instead of 512GB.
Another customer wants the Samsung Galaxy Ultra, but with a better camera.
Instead of rebuilding a phone from zero, the factory lets customers clone an existing phone and modify the parts they want.

💡 Key Idea
The Prototype pattern is like a digital template system:

Pick an existing phone model (prototype).
Clone it (creates an identical copy).
Modify only the desired parts.
Avoid rebuilding from scratch, making the process faster and more efficient.

*/

// Product (the base smartphone that will be cloned)
class Smartphone {
  constructor(
    public brand: string,
    public screenSize: string,
    public battery: string,
    public camera: string,
    public storage: string
  ) {}

  // Clone method (creates a copy of the current object)
  clone(): Smartphone {
    return new Smartphone(
      this.brand,
      this.screenSize,
      this.battery,
      this.camera,
      this.storage
    );
  }

  // Display the phone details
  describe(): string {
    return `📱 Smartphone Configuration:
- Brand: ${this.brand}
- Screen: ${this.screenSize}
- Battery: ${this.battery}
- Camera: ${this.camera}
- Storage: ${this.storage}`;
  }
}

// 🏭 The Smartphone Clone Factory
const basePhone = new Smartphone(
  "iPhone 15 Pro",
  "6.1 inches",
  "4000 mAh",
  "48 MP",
  "512 GB"
);

console.log("🆕 Original Smartphone:");
console.log(basePhone.describe());
console.log("---");

// 📌 Clone the phone and modify storage
const clonedPhone1 = basePhone.clone();
clonedPhone1.storage = "1 TB"; // Modified clone
console.log("🔁 Cloned & Modified Smartphone:");
console.log(clonedPhone1.describe());
console.log("---");

// 📌 Clone again and modify camera
const clonedPhone2 = clonedPhone1.clone();
clonedPhone2.camera = "108 MP"; // Modified clone
console.log("🔁 Cloned & Modified Smartphone with Better Camera:");
console.log(clonedPhone2.describe());
