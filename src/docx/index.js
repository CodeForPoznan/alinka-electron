const fs = require("fs");
const path = require("path");

const JSZip = require("jszip");

const ASSETS_LIST = [
  "_rels/.rels",
  "docProps/app.xml",
  "docProps/core.xml",
  "word/_rels/document.xml.rels",
  "word/document.xml",
  "word/fontTable.xml",
  "word/settings.xml",
  "word/styles.xml",
  "[Content_Types].xml"
];

function generateDocument() {
  const zip = new JSZip();

  for (let assetPath of ASSETS_LIST) {
    zip.file(
      assetPath,
      fs.readFileSync(path.posix.resolve(__dirname, "assets", assetPath))
    );
  }

  return zip;
}

module.exports = {
  generateDocument
};

if (require.main === module) {
  generateDocument()
    .generateNodeStream({ type: "nodebuffer", streamFiles: true })
    .pipe(fs.createWriteStream("output.docx"));
}
