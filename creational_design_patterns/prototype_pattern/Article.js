import { Document } from "./Document.js";

export class Article extends Document {
  constructor(title, content, author, tags = []) {
    super(title, content, { author, tags });
  }

  clone() {
    const cloned = super.clone();
    cloned.metadata.tags = [...this.metadata.tags];
    return cloned;
  }

  addTag(tag) {
    this.metadata.tags.push(tag);
  }
}
