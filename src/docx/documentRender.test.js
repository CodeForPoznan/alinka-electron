const path = require("path");

const { generateDocument } = require("./generateDocument");
const { getSpecificData } = require("./specificData");
const { DocumentData } = require("../utils/utils");

describe("In SPECJALNE decision", () => {
  const issue = "SPECJALNE";
  let specificData;
  beforeEach(() => {
    specificData = getSpecificData(issue);
  });

  it("child name should be rendered properly", () => {
    specificData.child.firstName = "mock child name";
    const documentData = new DocumentData(specificData).templateData;

    return generateDocument(issue, documentData)
      .file(path.join("word", "document.xml"))
      .async("string")
      .then(content => {
        expect(content).toEqual(expect.stringContaining("mock child name"));
      });
  });
});

describe("In INDYWIDUALNE decision", () => {
  const issue = "INDYWIDUALNE";
  let specificData;
  beforeEach(() => {
    specificData = getSpecificData(issue);
  });

  it("child name should be rendered properly", () => {
    specificData.child.firstName = "mock child name";
    const documentData = new DocumentData(specificData).templateData;

    return generateDocument(issue, documentData)
      .file(path.join("word", "document.xml"))
      .async("string")
      .then(content => {
        expect(content).toEqual(expect.stringContaining("mock child name"));
      });
  });
});

describe("In INDYWIDUALNE_ROCZNE decision", () => {
  const issue = "INDYWIDUALNE_ROCZNE";
  let specificData;
  beforeEach(() => {
    specificData = getSpecificData(issue);
  });

  it("child name should be rendered properly", () => {
    specificData.child.firstName = "mock child name";
    const documentData = new DocumentData(specificData).templateData;

    return generateDocument(issue, documentData)
      .file(path.join("word", "document.xml"))
      .async("string")
      .then(content => {
        expect(content).toEqual(expect.stringContaining("mock child name"));
      });
  });
});

describe("In REWALIDACYJNE decision", () => {
  const issue = "REWALIDACYJNE";
  let specificData;
  beforeEach(() => {
    specificData = getSpecificData(issue);
  });

  it("child name should be rendered properly", () => {
    specificData.child.firstName = "mock child name";
    const documentData = new DocumentData(specificData).templateData;

    return generateDocument(issue, documentData)
      .file(path.join("word", "document.xml"))
      .async("string")
      .then(content => {
        expect(content).toEqual(expect.stringContaining("mock child name"));
      });
  });
});

describe("In OPINIA decision", () => {
  const issue = "OPINIA";
  let specificData;
  beforeEach(() => {
    specificData = getSpecificData(issue);
  });

  it("child name should be rendered properly", () => {
    specificData.child.firstName = "mock child name";
    const documentData = new DocumentData(specificData).templateData;

    return generateDocument(issue, documentData)
      .file(path.join("word", "document.xml"))
      .async("string")
      .then(content => {
        expect(content).toEqual(expect.stringContaining("mock child name"));
      });
  });
});
