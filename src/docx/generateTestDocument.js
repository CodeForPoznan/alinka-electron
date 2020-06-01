const fs = require("fs");

const { generateDocument } = require("./generateDocument");
const { getSpecificData } = require("./specificData");
const { DocumentData } = require("../utils/utils");

const DOCUMENT_TYPES = ["DECISION", "ZARZADZENIE", "PROTOKOL", "ZAWIADOMIENIE"];
const DECISION_TYPES = [
  "SPECJALNE",
  "INDYWIDUALNE",
  "INDYWIDUALNE_ROCZNE",
  "REWALIDACYJNE",
  "OPINIA"
];
const documentType = process.argv[2] || "DECISION";
const issue = process.argv[3] || "SPECJALNE";

if (!DOCUMENT_TYPES.includes(documentType)) {
  console.log(
    `${documentType} is not valid document type.`,
    ` First argument should be one of ${DOCUMENT_TYPES}`
  );
  process.exit(1);
}

if (!DECISION_TYPES.includes(issue)) {
  console.log(
    `${issue} is not valid decision type.`,
    `Second argument should be one of ${DECISION_TYPES}`
  );
  process.exit(1);
}

const template = documentType == "DECISION" ? issue : documentType;

const specificData = getSpecificData(issue);
const documentData = new DocumentData(specificData).templateData;

generateDocument(template, documentData)
  .generateNodeStream({ type: "nodebuffer", streamFiles: true })
  .pipe(fs.createWriteStream(`${template}- ${specificData.meeting.date}.docx`));
