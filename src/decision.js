const docx = require('docx');
const fs = require('file-system');

const { Document, Paragraph, Packer } = docx;

class DecisionCreate extends Document {
  constructor(value) {
      super();
      this.value = value
      this.doc = new Document();
  }

  create() {
      let paragraph = new Paragraph("Exemplary content....");
      this.doc.addParagraph(paragraph);
  }

  save() {
    var packer = new Packer();
    packer.toBuffer(this.doc).then((buffer) => {
      fs.writeFile(`${this.value}.docx`, buffer)
    });
  }
}

module.exports = DecisionCreate;