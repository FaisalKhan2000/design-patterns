# Builder Pattern Exercise

## Task: Computer Builder

Create a computer building system with the following requirements:

1. Create a `Computer` class that has these properties:

   - CPU
   - RAM
   - Storage
   - GPU
   - OperatingSystem

2. Implement a `ComputerBuilder` class that can:

   - Set CPU (required)
   - Set RAM (required)
   - Set Storage (required)
   - Set GPU (optional)
   - Set OperatingSystem (optional)

3. Create a `ComputerShop` director class that can build:
   - Gaming Computer (high-end specs with GPU)
   - Office Computer (basic specs without GPU)

## Expected Usage Example:

```javascript
// Using director
const shop = new ComputerShop();
const gamingPC = shop.buildGamingComputer();
const officePC = shop.buildOfficeComputer();

// Using builder directly
const customPC = new ComputerBuilder()
  .setCPU("Intel i5")
  .setRAM("8GB")
  .setStorage("256GB SSD")
  .setOperatingSystem("Linux")
  .build();
```

## Success Criteria:

1. All required properties must be set before building
2. Builder should use method chaining
3. Computer details should be displayable
4. Director should create pre-configured builds
