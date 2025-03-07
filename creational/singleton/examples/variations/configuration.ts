/*

3.1. Eager Initialization (Example: Configuration Settings)

This example shows eager initialization with a ConfigurationSettings class.  Eager
initialization is suitable here because configuration settings are often needed
immediately when the application starts.

*/

type SettingValue = string | number | boolean;

interface ConfigurationSettingsInterface {
  getSetting<T extends SettingValue>(key: string): T | undefined;
  setSetting(key: string, value: SettingValue): ConfigurationSettings;

  hasSetting(key: string): boolean;
  getAllSettings(): Record<string, SettingValue>;
}

class ConfigurationSettings implements ConfigurationSettingsInterface {
  private static instance: ConfigurationSettings = new ConfigurationSettings();
  private readonly settings: Map<string, SettingValue>;
  private readonly initialized: boolean = false;

  private constructor() {
    this.settings = new Map<string, SettingValue>();
    // Default settings
    this.settings.set("apiUrl", "https://api.example.com");
    this.settings.set("timeout", 5000);
    this.settings.set("key", "your-api-key");
    this.settings.set("debug", false);
    this.initialized = true;
    console.log("Configuration settings initialized.");
  }

  public static getInstance(): ConfigurationSettings {
    return ConfigurationSettings.instance;
  }

  public getSetting<T extends SettingValue>(key: string): T | undefined {
    return this.settings.get(key) as T | undefined;
  }

  public setSetting(key: string, value: SettingValue): ConfigurationSettings {
    if (this.initialized && !this.settings.has(key)) {
      console.warn(`Creating new setting '${key}' after initialization.`);
    }
    this.settings.set(key, value);
    return this; // Enable method chaining
  }

  public hasSetting(key: string): boolean {
    return this.settings.has(key);
  }

  public getAllSettings(): Record<string, SettingValue> {
    return Object.fromEntries(this.settings.entries());
  }
}

// Usage:
const settings = ConfigurationSettings.getInstance(); // Eager initialization
console.log(settings.getAllSettings()); // { apiUrl: 'https://api.example.com', timeout: 5000, key: 'your-api-key', debug: false }
settings.setSetting("timeout", 10000); // Change a setting
console.log(settings.getSetting("timeout")); // 10000
console.log(settings.hasSetting("key")); // true
console.log(settings.hasSetting("unknown")); // false
console.log(settings.getAllSettings()); // { apiUrl: 'https://api.example.com', timeout: 10000, key: 'your-api
console.log(settings === ConfigurationSettings.getInstance()); // true - same instance
