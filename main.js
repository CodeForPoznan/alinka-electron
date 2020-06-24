const fs = require("fs");
const { app, BrowserWindow, ipcMain, Menu } = require("electron");
const { generateDocument } = require("./src/docx/generateDocument");
const { DocumentData } = require("./src/utils/utils");
const path = require("path");
// Specifies the enviroment variable
const inDevelopmentMode = process.env.MODE === "dev";
const { getSchoolTypeList } = require("./src/db/api");


/***************/
/* Main Window */
/***************/
app.on("ready", () => {
  // Configure the main window
  let mainWindow = new BrowserWindow({
    width: 1200,
    height: 665,
    icon: path.join(__dirname, "assets/Alinka-logo.png"),
    webPreferences: {
      backgroundThrottling: false
    }
  });

  // Load the apropriate file depending on env mode
  mainWindow.loadURL(
    inDevelopmentMode
      ? `http://localhost:9000`
      : `file://${__dirname}/build/index.html`
  );

  // Get list of school types from data base.
  ipcMain.on("db:schoolType", async () => {
    mainWindow.webContents.send("sendData", await getSchoolTypeList())
  })

  // Build Menu from template and insert it
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);

  // Display develooper tools in dev mode
  if (inDevelopmentMode) {
    mainWindow.webContents.openDevTools();

    const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS
    } = require("electron-devtools-installer");

    installExtension(REACT_DEVELOPER_TOOLS)
      .then(name => {
        console.log(`Added Extension:  ${name}`);
      })
      .catch(err => {
        console.log("An error occurred: ", err);
      });
  }

  // Quit app when closed
  mainWindow.on("closed", () => {
    app.quit();
  });
});

/********/
/* Menu */
/********/
const mainMenuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Quit",
        accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        }
      }
    ]
  }
];

// If mac add empty object to menu
if (process.platform === "darwin") {
  mainMenuTemplate.unshift({});
}

// Add developer tools item in dev mode
if (inDevelopmentMode) {
  mainMenuTemplate.push({
    label: "Developer Tools",
    submenu: [
      {
        label: "Toggle DevTools",
        accelerator: process.platform == "darwin" ? "Command+I" : "Ctrl+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: "reload"
      }
    ]
  });
}

// Render documents
ipcMain.on("print:value", (event, values) => {
  const documentTypes = [values.applicant.issue, "PROTOKOL", "ZAWIADOMIENIE", "ZARZADZENIE"];
  for (const documentType of documentTypes ) {
    const documentData = new DocumentData(values).templateData
    generateDocument(documentType, documentData)
    .generateNodeStream({ type: "nodebuffer", streamFiles: true })
    .pipe(fs.createWriteStream(
      `${values.child.firstName} ${values.child.lastName} - ${documentType} - ${values.date}.docx`
    ));
  }
});
