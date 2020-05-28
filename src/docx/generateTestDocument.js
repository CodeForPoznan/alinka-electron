const fs = require("fs");

const { generateDocument } = require("./generateDocument");
const { getSpecificData } = require("./specificData");
const { DocumentData } = require("../utils/utils");

const issue = process.argv[2] || "SPECJALNE";

const specificData = getSpecificData(issue);
const documentData = new DocumentData(specificData).templateData;

generateDocument(issue, documentData)
  .generateNodeStream({ type: "nodebuffer", streamFiles: true })
  .pipe(
    fs.createWriteStream(
      `${specificData.child.name} - ${specificData.date}.docx`
    )
  );
