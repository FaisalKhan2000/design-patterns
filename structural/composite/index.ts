/*

📌 Definition
The Composite Pattern is a structural design pattern that lets you treat individual objects and compositions of objects uniformly. It organizes objects into a tree structure to represent part-whole hierarchies, making it easy to work with both single elements and groups of elements using the same interface.

Key Idea: Treat a group of objects (composite) the same way as an individual object (leaf).

📺 Real-Life Example: File System (Folders & Files)
Imagine a file system where you have files and folders.

A file is a single entity.
A folder can contain multiple files or other folders (subfolders).
Regardless of whether it's a file or a folder, you should be able to perform common operations like:

Open
Delete
Move
Get size
This hierarchical structure makes the Composite Pattern a perfect fit for modeling a file system!

*/

// Component Interface (Common operations for both Files & Folders)
interface FileSystemEntity {
  getName(): string;
  getSize(): number;
}

// Leaf: Represents a single file
class File implements FileSystemEntity {
  constructor(private name: string, private size: number) {}

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.size;
  }
}

// Composite: Represents a folder that can contain files & other folders
class Folder implements FileSystemEntity {
  private children: FileSystemEntity[] = [];

  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  add(entity: FileSystemEntity): void {
    this.children.push(entity);
  }

  getSize(): number {
    return this.children.reduce((total, child) => total + child.getSize(), 0);
  }
}

// Client code
function main() {
  const file1 = new File("file1.txt", 10);
  const file2 = new File("file2.txt", 20);

  const subFolder = new Folder("SubFolder");
  subFolder.add(file1);
  subFolder.add(file2);

  const mainFolder = new Folder("MainFolder");
  mainFolder.add(subFolder);
  mainFolder.add(new File("file3.txt", 30));

  console.log(`${mainFolder.getName()} size: ${mainFolder.getSize()} KB`);
}

// Run the program
main();
