const electron = require('electron');
const docx = require("docx");
const fs = require('file-system');

const { app, BrowserWindow, ipcMain } = electron;

var packer = new docx.Packer();
var doc = new docx.Document();


app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        backgroundColor: '#2e2c29'
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('print', (event, value) => {
    var paragraph = new docx.Paragraph(value);
    doc.addParagraph(paragraph);

    packer.toBuffer(doc).then((buffer) => {
        fs.writeFile('test.docx', buffer)
    });
    console.log(value);
});

