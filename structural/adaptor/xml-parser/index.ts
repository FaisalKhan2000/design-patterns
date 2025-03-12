import xml2js from "xml2js";

interface JSONApi {
  getData(): Promise<object>;
}

class ThirdPartyXMLService {
  getDataInXML(): string {
    return `
    <response>
      <status>success</status>
      <message>Hello from XML API</message>
    </response>`;
  }
}

class XMLtoJSONAdaptor implements JSONApi {
  private xmlService: ThirdPartyXMLService;
  constructor(xmlService: ThirdPartyXMLService) {
    this.xmlService = xmlService;
  }

  async getData(): Promise<object> {
    const xmlData = this.xmlService.getDataInXML();
    const jsonData = await xml2js.parseStringPromise(xmlData, {
      explicitArray: false,
    });

    return jsonData;
  }
}

(async () => {
  const xmlService = new ThirdPartyXMLService();
  const adapter: JSONApi = new XMLtoJSONAdaptor(xmlService); // ✅ Uses the Target Interface

  console.log("📡 Fetching data...");
  const jsonData = await adapter.getData();
  console.log("✅ JSON Response:", jsonData);
})();
