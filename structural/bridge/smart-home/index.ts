// Step 1: Implementation Interface (Smart Device)
interface Appliance {
  turnOn(): string;
  turnOff(): string;
}

// Step 2: Concrete Implementations
class SmartLight implements Appliance {
  turnOn(): string {
    return "Smart Light is ON.";
  }
  turnOff(): string {
    return "Smart Light is OFF.";
  }
}

class SmartThermostat implements Appliance {
  turnOn(): string {
    return "Smart Thermostat is set to 22°C.";
  }
  turnOff(): string {
    return "Smart Thermostat is OFF.";
  }
}

// Step 3: Abstraction (Controller)
abstract class SmartController {
  protected device: Appliance;

  constructor(device: Appliance) {
    this.device = device;
  }

  abstract activate(): string;
  abstract deactivate(): string;
}

// Step 4: Concrete Controllers
class MobileAppController extends SmartController {
  activate(): string {
    return `Mobile App: ${this.device.turnOn()}`;
  }
  deactivate(): string {
    return `Mobile App: ${this.device.turnOff()}`;
  }
}

class VoiceAssistantController extends SmartController {
  activate(): string {
    return `Voice Assistant: ${this.device.turnOn()}`;
  }
  deactivate(): string {
    return `Voice Assistant: ${this.device.turnOff()}`;
  }
}

// Step 5: Client Code (Your Task: Implement This)
function main() {
  // Create Smart Device instances
  const smartLight = new SmartLight();
  const smartThermostat = new SmartThermostat();

  // Create Controller instances
  const mobileControllerForLight = new MobileAppController(smartLight);
  const voiceControllerForThermostat = new VoiceAssistantController(
    smartThermostat
  );

  // Use controllers to operate appliances
  console.log(mobileControllerForLight.activate()); // Mobile App: Smart Light is ON.
  console.log(voiceControllerForThermostat.activate()); // Voice Assistant: Smart Thermostat is set to 22°C.

  console.log(mobileControllerForLight.deactivate()); // Mobile App: Smart Light is OFF.
  console.log(voiceControllerForThermostat.deactivate()); // Voice Assistant: Smart Thermostat is OFF.
}

// Run the implementation
main();
