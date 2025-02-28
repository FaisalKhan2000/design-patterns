import { Document } from "./Document.js";

export class Template extends Document {
  constructor(title, content, category) {
    super(title, content, { category });
    this.usageCount = 0;
  }

  clone() {
    const cloned = super.clone();
    cloned.usageCount = 0;
    return cloned;
  }

  use() {
    this.usageCount++;
  }
}
