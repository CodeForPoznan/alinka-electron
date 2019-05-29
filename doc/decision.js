//this allows to save the file
const app = require('electron');
const fs = require('fs');
const dialog = app.dialog;

//this changes the file to docx
const docx = require('docx');
const { Document, Paragraph, Packer, TextRun } = docx;



class DecisionCreate extends Document {
  constructor(value) {
      super();
      this.value = value
      this.doc = new Document();
  }

  create() {
      let paragraph = new Paragraph(this.value);
      this.doc.addParagraph(paragraph);
  }

  save() {
    dialog.showSaveDialog((fileName) => {
      if (fileName === undefined){
        return;
      }

      var packer = new Packer();

      packer.toBuffer(this.doc).then((buffer) => {
        fs.writeFileSync(`${fileName}.docx`, buffer);
        console.log("Document created successfully");
      }).catch((e) => {
        console.log(e)
      });    
    })
  }
}

module.exports = DecisionCreate;