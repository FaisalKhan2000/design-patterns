// target interference
interface FileStorage {
  uploadFile(filename: string, content: string): void;
  downloadFile(filename: string): string;
}

// adaptee
class S3Storage {
  private storage: { [key: string]: string } = {};

  putObject(filename: string, content: string): void {
    this.storage[filename] = content;
    console.log(`📤 Uploaded '${filename}' to AWS S3`);
  }

  getObject(filename: string): string {
    return this.storage[filename] || "❌ File not found in AWS S3";
  }
}

// adaptor
class S3Adaptor implements FileStorage {
  private s3: S3Storage;
  constructor(s3: S3Storage) {
    this.s3 = s3;
  }
  uploadFile(filename: string, content: string): void {
    this.s3.putObject(filename, content);
  }

  downloadFile(filename: string): string {
    return this.s3.getObject(filename);
  }
}

class GoogleCloudStorage {
  private storage: Map<string, string> = new Map();

  saveFile(filename: string, content: string) {
    this.storage.set(filename, content);
    console.log(`📤 Uploaded '${filename}' to Google Cloud Storage`);
  }

  fetchFile(filename: string): string {
    return (
      this.storage.get(filename) || "❌ File not found in Google Cloud Storage"
    );
  }
}

class GoogleCloudStorageAdaptor implements FileStorage {
  private gcs: GoogleCloudStorage;
  constructor(gcs: GoogleCloudStorage) {
    this.gcs = gcs;
  }

  uploadFile(filename: string, content: string): void {
    this.gcs.saveFile(filename, content);
  }

  downloadFile(filename: string): string {
    return this.gcs.fetchFile(filename);
  }
}

function storeAndRetrieve(
  storage: FileStorage,
  filename: string,
  content: string
) {
  storage.uploadFile(filename, content);
  console.log("📥 Downloaded:", storage.downloadFile(filename));
}

const s3Adapter = new S3Adaptor(new S3Storage());
const gcsAdapter = new GoogleCloudStorageAdaptor(new GoogleCloudStorage());

storeAndRetrieve(s3Adapter, "test.txt", "Hello from AWS S3!");
storeAndRetrieve(gcsAdapter, "test.txt", "Hello from Google Cloud Storage!");
