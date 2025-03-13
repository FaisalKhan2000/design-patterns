/*

🎯 What is the Bridge Pattern?
The Bridge Pattern is a structural design pattern that decouples an abstraction from its implementation, allowing them to evolve independently.

Key Benefits:
✔ Allows different parts of the system (e.g., a remote control and a device) to change separately.
✔ Helps avoid class explosion caused by multiple variations of abstractions and implementations.
✔ Improves scalability and maintainability.

📺 Real-World Example: Universal Remote & Home Devices
Imagine you have a universal remote that can control multiple devices like TVs and DVD players.

The remote control is the abstraction (interface that users interact with).
The TV/DVD player is the implementation (actual device behavior).
The bridge is the link between the remote and the device, allowing them to vary independently.

*/

// Implementation interface for devices
interface Device {
  powerOn(): string;
  powerOff(): string;
  setChannel(channel: number): string;
}

// Concrete implementation for a TV
class TV implements Device {
  public powerOn(): string {
    return "TV is powered ON.";
  }

  public powerOff(): string {
    return "TV is powered OFF.";
  }

  public setChannel(channel: number): string {
    return `TV channel set to ${channel}.`;
  }
}

// Concrete implementation for a DVD
class DVD implements Device {
  public powerOn(): string {
    return "DVD Player is powered ON.";
  }

  public powerOff(): string {
    return "DVD Player is powered OFF.";
  }

  public setChannel(channel: number): string {
    return `DVD Player does not support channels. Playing track ${channel}.`;
  }
}

// Abstraction: Remote control
abstract class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  public abstract turnOn(): string;
  public abstract turnOff(): string;
  public abstract changeChannel(channel: number): string;
}

// Refined abstraction: Basic remote control
class BasicRemote extends RemoteControl {
  public turnOn(): string {
    return this.device.powerOn();
  }

  public turnOff(): string {
    return this.device.powerOff();
  }

  public changeChannel(channel: number): string {
    return this.device.setChannel(channel);
  }
}

// Refined abstraction: Advanced remote control with additional features
class AdvancedRemote extends RemoteControl {
  public turnOn(): string {
    return this.device.powerOn();
  }

  public turnOff(): string {
    return this.device.powerOff();
  }

  public changeChannel(channel: number): string {
    return this.device.setChannel(channel);
  }

  // Additional feature only available in advanced remote
  public mute(): string {
    return "Device is muted.";
  }
}

// Client code
function main() {
  // Create device instances (implementations)
  const tv = new TV();
  const dvdPlayer = new DVD();

  // Create remote controls (abstractions) and bridge them to devices
  const basicRemoteForTV = new BasicRemote(tv);
  const advancedRemoteForDVD = new AdvancedRemote(dvdPlayer);

  // Use the basic remote to control the TV
  console.log("Using Basic Remote for TV:");
  console.log(basicRemoteForTV.turnOn());
  console.log(basicRemoteForTV.changeChannel(5));
  console.log(basicRemoteForTV.turnOff());

  console.log("---");

  // Use the advanced remote to control the DVD player
  console.log("Using Advanced Remote for DVD Player:");
  console.log(advancedRemoteForDVD.turnOn());
  console.log(advancedRemoteForDVD.changeChannel(3));
  console.log(advancedRemoteForDVD.mute());
  console.log(advancedRemoteForDVD.turnOff());
}

// Run the program
main();
