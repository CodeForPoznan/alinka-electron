const fs = require("fs");
const path = require("path");

const JSZip = require("jszip");
const nunjucks = require("nunjucks");

const ASSETS_LIST = {
  INDYWIDUALNE: {
    prefix: "indywidualne",
    statics: [
      "customXml/itemProps1.xml",
      "word/fontTable.xml",
      "word/footnotes.xml",
      "word/styles.xml",
      "word/stylesWithEffects.xml",
      "[Content_Types].xml"
    ],
    templates: ["word/document.xml"]
  },
  SPECJALNE: {
    prefix: "specjalne",
    statics: [
      "customXml/itemProps1.xml",
      "word/fontTable.xml",
      "word/footnotes.xml",
      "word/styles.xml",
      "[Content_Types].xml"
    ],
    templates: ["word/document.xml"]
  },
  INDYWIDUALNE_ROCZNE: {
    prefix: "indywidualne_roczne",
    statics: [
      "customXml/itemProps1.xml",
      "word/fontTable.xml",
      "word/footnotes.xml",
      "word/styles.xml",
      "[Content_Types].xml"
    ],
    templates: ["word/document.xml"]
  },
  REWALIDACYJNE: {
    prefix: "rewalidacyjne",
    statics: [
      "customXml/itemProps1.xml",
      "word/fontTable.xml",
      "word/footnotes.xml",
      "word/styles.xml",
      "[Content_Types].xml"
    ],
    templates: ["word/document.xml"]
  },
  OPINIA: {
    prefix: "opinia",
    statics: [
      "customXml/itemProps1.xml",
      "word/fontTable.xml",
      "word/footnotes.xml",
      "word/styles.xml",
      "[Content_Types].xml"
    ],
    templates: ["word/document.xml"]
  },
  common: [
    "customXml/_rels/item1.xml.rels",
    "customXml/item1.xml",
    "_rels/.rels",
    "word/_rels/document.xml.rels",
    "word/theme/theme1.xml",
    "word/endnotes.xml",
    "word/numbering.xml",
    "word/settings.xml",
    "word/webSettings.xml",
  ]

};

function generateDocument(documentType, data) {
  const zip = new JSZip();
  for (let staticPath of ASSETS_LIST[documentType].statics) {
    zip.file(
      staticPath,
      fs.readFileSync(
        path.posix.resolve(
          __dirname,
          "assets",
          ASSETS_LIST[documentType].prefix,
          staticPath
        )
      )
    );
  }

  for (let commonStaticPath of ASSETS_LIST.common) {
    zip.file(
      commonStaticPath,
      fs.readFileSync(
        path.posix.resolve(
          __dirname,
          "assets",
          "commons",
          commonStaticPath
        )
      )
    );
  }

  for (let tempalatePath of ASSETS_LIST[documentType].templates) {
    zip.file(
      tempalatePath,
      nunjucks.renderString(
        fs.readFileSync(
          path.posix.resolve(
            __dirname,
            "assets",
            ASSETS_LIST[documentType].prefix,
            tempalatePath
          ),
          "utf8"
        ),
        data
      )
    );
  }

  return zip;
}

module.exports = {
  generateDocument
};
