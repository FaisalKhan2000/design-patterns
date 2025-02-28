export class Document {
  constructor(title, content, metadata = {}) {
    this.title = title;
    this.content = content;
    this.metadata = metadata;
    this.created = new Date();
  }

  clone() {
    const cloned = Object.create(this);
    cloned.title = `${this.title} (Copy)`;
    cloned.content = this.content;
    cloned.metadata = { ...this.metadata };
    cloned.created = new Date();
    return cloned;
  }

  getInfo() {
    return {
      title: this.title,
      created: this.created,
      metadata: this.metadata,
    };
  }
}
