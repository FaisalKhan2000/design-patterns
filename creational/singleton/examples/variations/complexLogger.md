## **1️⃣ Purpose of the Abstract Class (`BaseLogger`)**

- We need **different versions** of a **singleton** class.
- To enforce **a common structure**, we create an **abstract class** (`BaseLogger`).
- The **abstract class** will manage **a registry** to store **one instance per subclass**.

---

## **2️⃣ How the `registry` Works**

```ts
private static registry = new Map<any, BaseLogger>();
```

- **Registry stores key-value pairs**:
  - **Key** → The subclass (e.g., `ConsoleLogger`).
  - **Value** → The **singleton instance** of that subclass.

---

## **3️⃣ `getInstance()` Logic**

```ts
public static getInstance(this: any): BaseLogger {
    const key = this; // 'this' refers to the subclass calling getInstance()
    if (!BaseLogger.registry.has(key)) {
        BaseLogger.registry.set(key, new this()); // Create & store singleton
    }
    return BaseLogger.registry.get(key) as BaseLogger; // Return singleton
}
```

### 🔥 **Step-by-step explanation**

1. **Subclass calls `getInstance()`** → (`ConsoleLogger.getInstance()`).
2. `this` refers to **the class calling the method** (e.g., `ConsoleLogger`).
3. If `ConsoleLogger` **is not in `registry`**, it creates and **stores** a new instance.
4. If `ConsoleLogger` **already exists**, it simply **returns the stored instance**.

---

## **4️⃣ Key & Value in `registry`**

✅ **Key →** `ConsoleLogger` (subclass).  
✅ **Value →** `new ConsoleLogger()` (instance of subclass).

**Example:** If we have multiple subclasses like `ConsoleLogger` and `FileLogger`, the registry will look like:

```ts
{
  ConsoleLogger: instance of ConsoleLogger,
  FileLogger: instance of FileLogger
}
```

Each subclass gets **its own** singleton instance.

---

## **5️⃣ When You Create a Subclass**

```ts
class ConsoleLogger extends BaseLogger {
  log(message: string): void {
    console.log(`[Console] ${message}`);
  }
}

const logger1 = ConsoleLogger.getInstance();
const logger2 = ConsoleLogger.getInstance();

console.log(logger1 === logger2); // ✅ true (same instance)
```

Here’s what happens:

- `ConsoleLogger.getInstance()` stores `ConsoleLogger → instance of ConsoleLogger`.
- If called again, it **reuses the same instance**.

---

## **✅ Final Understanding**

> - The **abstract class** manages multiple **singletons**.
> - The **subclass itself** is stored as the **key**.
> - A **new instance of that subclass** is stored as the **value**.
> - Calling `.getInstance()` ensures that **only one instance exists per subclass**.
