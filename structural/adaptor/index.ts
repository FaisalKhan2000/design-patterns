/*

🔌 Adapter Design Pattern (Structural Pattern)
📌 Definition:
The Adapter Pattern allows two incompatible interfaces to work together by creating an intermediary (adapter) that translates requests from one interface to another.

Think of it as a power adapter that allows a European plug to fit into a U.S. socket.


*/

/*

📱 Real-World Example: Charging Adapter

Imagine you're traveling to Europe from the USA, and you bring your laptop charger, which has a US plug (two flat pins). However, in Europe, the power outlets use a different standard (two round pins). Your US plug is incompatible with the European outlet. To solve this, you use a plug adapter that converts the US plug into a European-compatible plug. The adapter doesn't change how your charger works—it simply makes it compatible with the new system.

In software terms:

The client is you (expecting to charge your laptop).
The target interface is the European outlet (the expected interface).
The adaptee is your US charger plug (the incompatible system you want to use).
The adapter is the plug adapter (which translates the US plug to work with the European outlet).
The Adapter Pattern is commonly used in software development when integrating third-party libraries, legacy code, or systems with incompatible interfaces.

*/

// 🌍 Target Interface (European Outlet)
interface EuropeanOutlet {
  provideElectricity(): string;
}

// ⚡ Adaptee (U.S. Plug)
class USCharger {
  provideElectricity(): string {
    return "🔌 U.S. plug is providing electricity";
  }
}

// 🔄 Adapter (Allows US Plug to Work in European Outlet)
class USChargerAdapter implements EuropeanOutlet {
  private usPlug: USCharger;

  constructor(usPlug: USCharger) {
    this.usPlug = usPlug;
  }

  provideElectricity(): string {
    return this.usPlug.provideElectricity();
  }
}

// 🎯 Client Code (You Trying to Charge a Laptop in Europe)
function main() {
  const usPlug = new USCharger();
  const adapter = new USChargerAdapter(usPlug);
  console.log(adapter.provideElectricity());
}

main();
