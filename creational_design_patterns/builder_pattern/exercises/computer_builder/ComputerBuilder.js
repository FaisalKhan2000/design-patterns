import { Computer } from "./computer.js";

export class ComputerBuilder {
  constructor() {
    this.computer = new Computer();
  }

  setCpu(cpu) {
    this.computer.cpu = cpu;
    return this;
  }
  setRam(ram) {
    this.computer.ram = ram;
    return this;
  }
  setStorage(storage) {
    this.computer.storage = storage;
    return this;
  }
  setGpu(gpu) {
    this.computer.gpu = gpu;
    return this;
  }

  setOs(os) {
    this.computer.os = os;
    return this;
  }

  build() {
    return this.computer;
  }
}
