export class DocumentRegistry {
  constructor() {
    this.prototypes = new Map();
  }

  registerPrototype(key, prototype) {
    this.prototypes.set(key, prototype);
  }

  createClone(key) {
    const prototype = this.prototypes.get(key);
    if (!prototype) {
      throw new Error(`Prototype with key '${key}' not found`);
    }
    return prototype.clone();
  }
  getRegisteredKeys() {
    return Array.from(this.prototypes.keys());
  }
}
