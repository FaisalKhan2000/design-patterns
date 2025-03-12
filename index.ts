interface EuropeanOutlet {
  provideElectricity(): string;
}

class USCharger {
  provideElectricity(): string {
    return "🔌 U.S. plug is providing electricity";
  }
}

class USChargerAdapter implements EuropeanOutlet {
  private usPlug: USCharger;

  constructor(usPlug: USCharger) {
    this.usPlug = usPlug;
  }

  provideElectricity(): string {
    return this.usPlug.provideElectricity();
  }
}

function main() {
  const usPlug = new USCharger();
  const adapter = new USChargerAdapter(usPlug);
  console.log(adapter.provideElectricity());
}

main();
