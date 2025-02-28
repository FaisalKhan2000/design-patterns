import { Article } from "./Article.js";
import { Template } from "./Template.js";
import { DocumentRegistry } from "./DocumentRegistry.js";

// Create prototype instances
const articleProto = new Article(
  "Sample Article",
  "This is a sample article content",
  "John Doe",
  ["sample", "prototype"]
);

const templateProto = new Template(
  "Report Template",
  "# Title\n## Introduction\n## Body\n## Conclusion",
  "report"
);

// Set up registry
const registry = new DocumentRegistry();
registry.registerPrototype("article", articleProto);
registry.registerPrototype("report-template", templateProto);

// Clone and use documents
const myArticle = registry.createClone("article");
myArticle.addTag("technology");
console.log(myArticle.getInfo());

const reportDoc = registry.createClone("report-template");
reportDoc.title = "Q1 2024 Report";
console.log(reportDoc.getInfo());
