/*

🛠 TASK 1: Singleton - Global Configuration Manager
👉 Create a Singleton class for managing global smartphone configurations (e.g., default screen size, battery life, OS version).

Ensure that only one instance exists and is shared across the system.
Add a method like setConfig() and getConfig().

*/

interface IConfig {
  setConfig(key: string, value: string): void;
  getConfig(key: string): string | undefined;
}

class Config implements IConfig {
  private static instance: Config;
  private config: Map<string, string>;

  private constructor() {
    this.config = new Map<string, string>();
  }

  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }

  public setConfig(key: string, value: string): void {
    this.config.set(key, value);
  }

  public getConfig(key: string): string | undefined {
    return this.config.get(key);
  }
}

const globalConfig = Config.getInstance();
globalConfig.setConfig("screenSize", "6.5 inches");
console.log(globalConfig.getConfig("screenSize"));
