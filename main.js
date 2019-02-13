const { app, BrowserWindow, ipcMain } = require('electron');
const docx = require('docx');
const fs = require('file-system');


var packer = new docx.Packer();
var doc = new docx.Document();
var AdmZip = require('adm-zip');

var zip = new AdmZip();

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        backgroundColor: '#c1c1d7'
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.webContents.openDevTools();
});

ipcMain.on('print', (event, value) => {
    zip.addLocalFolder(`${__dirname}/documents/orzeczenie/`);
    zip.writeZip(`${__dirname}/${value}.docx`);
});

