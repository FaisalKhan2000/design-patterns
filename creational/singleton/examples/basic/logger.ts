/*

This example demonstrates a Logger class as a Singleton.  A Logger is a good
candidate for a Singleton because you typically want a single, centralized point
for logging messages throughout your application.

*/

interface LoggerInterface {
  log(message: string): void;
  error(message: string): void;
  warn(message: string): void;
}

class Logger implements LoggerInterface {
  private static instance: Logger;
  private logFile: string;

  private constructor(logFile: string) {
    this.logFile = logFile;

    // In a real application, you might initialize file handles or other resources here.
    console.log(`Logger initialized.  Logging to: ${this.logFile}`);
  }

  public static getInstance(logFile: string = "app.log"): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger(logFile);
    }
    return Logger.instance;
  }

  public log(message: string): void {
    const timestamp = new Date().toISOString();
    const logEntry = `${timestamp}: ${message}`;
    console.log(`Logging: ${logEntry} (written to: ${this.logFile})`);
    // In a real application, you would write the log entry to the log file.
  }

  public error(message: string): void {
    const timestamp = new Date().toISOString();
    const logEntry = `${timestamp} [ERROR]: ${message}`;
    console.error(`Error: ${logEntry} (written to: ${this.logFile})`);
    // In a real application, you would write the error to the log file.
  }

  public warn(message: string): void {
    const timestamp = new Date().toISOString();
    const logEntry = `${timestamp} [WARN]: ${message}`;
    console.warn(`Warning: ${logEntry} (written to: ${this.logFile})`);
    // In a real application, you would write the warning to the log file.
  }
}

// Usage:
const logger1 = Logger.getInstance(); // Uses default log file "app.log"
logger1.log("Application started.");

const logger2 = Logger.getInstance("admin.log"); // Still gets the *same* instance as logger1
logger2.log("User logged in."); // Logs to "app.log" (because it's the same instance)
logger1.error("An error occured");
console.log(logger1 === logger2); // true - same instance
