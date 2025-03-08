abstract class BaseLogger {
  // Make registry static on BaseLogger to be accessible from all subclasses
  private static registry = new Map<any, BaseLogger>();

  protected constructor() {
    console.log("BaseLogger initialized.");
    // Protected constructor to prevent direct instantiation of BaseLogger
  }

  public static getInstance(this: any): BaseLogger {
    const key = this;
    if (!BaseLogger.registry.has(key)) {
      BaseLogger.registry.set(key, new this());
    }
    return BaseLogger.registry.get(key) as BaseLogger;
  }

  public abstract log(message: string): void;
}

class ConsoleLogger extends BaseLogger {
  protected constructor() {
    super();
    console.log("ConsoleLogger initialized.");
  }

  public log(message: string): void {
    console.log(`ConsoleLogger: ${message}`);
  }
}

const consoleLogger = ConsoleLogger.getInstance();
consoleLogger.log("Hello, World!");
