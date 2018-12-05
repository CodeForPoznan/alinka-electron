const electron = require('electron');
const docx = require("docx");

const { app, BrowserWindow, ipcMain } = electron;

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
    var exporter = new docx.Packer(doc);
    exporter.pack("My First Document");
    console.log(value);
});

