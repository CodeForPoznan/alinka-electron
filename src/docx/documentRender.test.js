const { generateDocument } = require("./generateDocument");
const { getSpecificData } = require("./specificData");
const { DocumentData } = require("../utils/utils");

describe("In SPECJALNE decision", () => {
  const issue = "SPECJALNE";
  var specificData;
  beforeEach(() => {
    specificData = getSpecificData(issue);
  });

  it("child name should be rendered properly", () => {
    specificData.child.name = "mock child name";
    const documentData = new DocumentData(specificData).templateData;

    return generateDocument(issue, documentData)
      .folder("word")
      .file("document.xml")
      .async("string")
      .then(content => {
        expect(content).toEqual(expect.stringContaining("mock child name"));
      });
  });
});

describe("In INDYWIDUALNE decision", () => {
  const issue = "INDYWIDUALNE";
  var specificData;
  beforeEach(() => {
    specificData = getSpecificData(issue);
  });

  it("child name should be rendered properly", () => {
    specificData.child.name = "mock child name";
    const documentData = new DocumentData(specificData).templateData;

    return generateDocument(issue, documentData)
      .folder("word")
      .file("document.xml")
      .async("string")
      .then(content => {
        expect(content).toEqual(expect.stringContaining("mock child name"));
      });
  });
});

describe("In INDYWIDUALNE_ROCZNE decision", () => {
  const issue = "INDYWIDUALNE_ROCZNE";
  var specificData;
  beforeEach(() => {
    specificData = getSpecificData(issue);
  });

  it("child name should be rendered properly", () => {
    specificData.child.name = "mock child name";
    const documentData = new DocumentData(specificData).templateData;

    return generateDocument(issue, documentData)
      .folder("word")
      .file("document.xml")
      .async("string")
      .then(content => {
        expect(content).toEqual(expect.stringContaining("mock child name"));
      });
  });
});

describe("In REWALIDACYJNE decision", () => {
  const issue = "REWALIDACYJNE";
  var specificData;
  beforeEach(() => {
    specificData = getSpecificData(issue);
  });

  it("child name should be rendered properly", () => {
    specificData.child.name = "mock child name";
    const documentData = new DocumentData(specificData).templateData;

    return generateDocument(issue, documentData)
      .folder("word")
      .file("document.xml")
      .async("string")
      .then(content => {
        expect(content).toEqual(expect.stringContaining("mock child name"));
      });
  });
});

describe("In OPINIA decision", () => {
  const issue = "OPINIA";
  var specificData;
  beforeEach(() => {
    specificData = getSpecificData(issue);
  });

  it("child name should be rendered properly", () => {
    specificData.child.name = "mock child name";
    const documentData = new DocumentData(specificData).templateData;

    return generateDocument(issue, documentData)
      .folder("word")
      .file("document.xml")
      .async("string")
      .then(content => {
        expect(content).toEqual(expect.stringContaining("mock child name"));
      });
  });
});
