const { app, BrowserWindow, ipcMain } = require('electron');

const DecisionCreate = require('./src/decision');


app.on('ready', () => {
    let mainWindow = new BrowserWindow(
      {
        width: 800,
        height: 600,
        webPreferences: {
          backgroundThrottling: false
        }
      }
    );
    mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});

ipcMain.on('print:value', (event, value) => {
  var doc = new DecisionCreate(value);
  doc.create();
  doc.save();
});

