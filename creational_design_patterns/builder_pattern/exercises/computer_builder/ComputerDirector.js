import { ComputerBuilder } from "./ComputerBuilder.js";

class ComputerDirector {
  buildGamingComputer() {
    return new ComputerBuilder()
      .setCpu("Intel i9")
      .setGpu("NVIDIA RTX 3080")
      .setStorage("1TB SSD")
      .setRam("32GB")
      .setOs("Windows 10")
      .build();
  }

  buildOfficeComputer() {
    return new ComputerBuilder()
      .setCpu("Intel i5")
      .setStorage("512GB SSD")
      .setRam("16GB")
      .setOs("Windows 10")
      .build();
  }
}

const shop = new ComputerDirector();
const gamingPC = shop.buildGamingComputer();
const officePC = shop.buildOfficeComputer();
console.log(gamingPC);
console.log(officePC);
