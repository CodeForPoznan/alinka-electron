const fs = require("fs");
const path = require("path");

const JSZip = require("jszip");
const nunjucks = require("nunjucks");

const ASSETS_LIST = {
  INDYWIDUALNE: {
    prefix: "indywidualne",
    statics: [
      "_rels/.rels",
      "customXml/_rels/item1.xml.rels",
      "customXml/item1.xml",
      "customXml/itemProps1.xml",
      "docProps/app.xml",
      "docProps/core.xml",
      "docProps/thumbnail.jpeg",
      "word/_rels/document.xml.rels",
      "word/theme/theme1.xml",
      "word/fontTable.xml",
      "word/footnotes.xml",
      "word/numbering.xml",
      "word/settings.xml",
      "word/styles.xml",
      "word/stylesWithEffects.xml",
      "word/webSettings.xml",
      "[Content_Types].xml"
    ],
    templates: ["word/document.xml"]
  }
};

function generateDocument(type, data) {
  const zip = new JSZip();

  for (let staticPath of ASSETS_LIST[type].statics) {
    zip.file(
      staticPath,
      fs.readFileSync(
        path.posix.resolve(
          __dirname,
          "assets",
          ASSETS_LIST[type].prefix,
          staticPath
        )
      )
    );
  }

  for (let tempalatePath of ASSETS_LIST[type].templates) {
    zip.file(
      tempalatePath,
      nunjucks.renderString(
        fs.readFileSync(
          path.posix.resolve(
            __dirname,
            "assets",
            ASSETS_LIST[type].prefix,
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

if (require.main === module) {
  generateDocument("INDYWIDUALNE", {
    applicant: {
      address: "Wielka 4/6, 55-789 Studnia",
      name: "Tomasz Rzeźniczak i Adelajda Kieł"
    },
    child: {
      address: "55-789 Studnia, Wielka 4/6",
      birthDate: "12.12.1912",
      birthPlace: "Pachy Wielkie",
      name: "Wiktor Eridfasdfz2",
      pesel: "12121244441"
    },
    city: "Grodzisk Wielkopolski",
    date: "15.07.2019",
    no: "42",
    parents: {
      address: "65-898 Ugody, Zielona 29b/5",
      name: "Tomasz Rzeźniczak i Adelajda Kieł"
    },
    period: "styczeń 2018 - listopad 2019",
    reason: "ZNACZNIE_UTRUDNIAJACY",
    school:
      "Szkoła Podstawowa nr 4 w Grodzisku Wlkp., szkoła podstawowa, 62-065 Grodzisk Wlkp., ul. Środkowa 56, murarz, 5a",
    team: {
      address: "ul. Zbąszyńska 11",
      members: [
        { name: "Antoni Stąsz-Lebieź", function: "przewodniczący zespołu" },
        { name: "mgr Leonia Witek-Konuś", function: "psycholog, tyflopedagog" },
        {
          name: "mgr Eleonora Roseveelt",
          function: "socjoterapeuta, tyflopedagog"
        }
      ],
      name:
        "Zespół Orzekający przy Poradni Psychologiczno-Pedagogicznej w Grodzisku Wlkp."
    }
  })
    .generateNodeStream({ type: "nodebuffer", streamFiles: true })
    .pipe(fs.createWriteStream("output.docx"));
}
