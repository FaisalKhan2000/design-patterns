interface Device {
  powerOn(): string;
  powerOff(): string;
  setChannel(channel: number): string;
}

// concerete implementation
class TV implements Device {
  public powerOn(): string {
    return "TV is powered ON.";
  }

  public powerOff(): string {
    return "TV is powered OFF.";
  }

  public setChannel(channel: number): string {
    return `TV Channel set to ${channel}.`;
  }
}

class DVD implements Device {
  public powerOn(): string {
    return "DVD player is turned ON.";
  }

  public powerOff(): string {
    return "DVD player is turned OFF.";
  }

  public setChannel(channel: number): string {
    return `DVD Player does not support channels. Playing track ${channel}.`;
  }
}

abstract class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  public abstract turnOn(): string;
  public abstract turnOff(): string;
  public abstract changeChannel(channel: number): string;
}

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

function main() {
  const tv = new TV();
  const dvd = new DVD();

  const basicRemoteForTV = new BasicRemote(tv);
  const advancedRemoteForDVD = new AdvancedRemote(dvd);

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

main();
