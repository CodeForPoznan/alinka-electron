const fs = require("fs");
const path = require("path");

const JSZip = require("jszip");
const nunjucks = require("nunjucks");

const TEMPLATE_PATH_NAME = {
  INDYWIDUALNE: "indywidualne",
  SPECJALNE: "specjalne",
  INDYWIDUALNE_ROCZNE: "indywidualne_roczne",
  REWALIDACYJNE: "rewalidacyjne",
  OPINIA: "opinia",
  ZARZADZENIE: "zarzadzenie",
  PROTOKOL: "protokol",
  ZAWIADOMIENIE: "zawiadomienie"
};

const COMMON_FILES = [
  path.join("_rels", ".rels"),
  path.join("word", "_rels", "document.xml.rels"),
  path.join("word", "theme", "theme1.xml"),
  path.join("word", "endnotes.xml"),
  path.join("word", "fontTable.xml"),
  path.join("word", "numbering.xml"),
  path.join("word", "settings.xml"),
  path.join("word", "styles.xml"),
  path.join("word", "webSettings.xml"),
  path.join("[Content_Types].xml")
];

function generateDocument(documentType, data) {
  nunjucks.configure(path.resolve(__dirname, "assets"));
  const zip = new JSZip();
  const templatePath = TEMPLATE_PATH_NAME[documentType];
  zip.file(
    path.join("word", "footnotes.xml"),
    fs.readFileSync(
      path.resolve(__dirname, "assets", templatePath, "word", "footnotes.xml")
    )
  );

  for (let commonStaticPath of COMMON_FILES) {
    zip.file(
      commonStaticPath,
      fs.readFileSync(
        path.resolve(__dirname, "assets", "commons", commonStaticPath)
      )
    );
  }

  zip.file(
    path.join("word", "document.xml"),
    nunjucks.renderString(
      fs.readFileSync(
        path.resolve(__dirname, "assets", templatePath, "word", "document.xml"),
        "utf8"
      ),
      data
    )
  );

  return zip;
}

module.exports = { generateDocument };
