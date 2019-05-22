const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const DecisionCreate = require('./src/doc/decision');
const path = require('path');
// Specifies the enviroment variable 
const inDevelopmentMode = (process.env.MODE === 'dev')


/***************/
/* Main Window */
/***************/
app.on('ready', () => {
	// Configure the main window
	let mainWindow = new BrowserWindow(
		{
			width: 800,
			height: 600,
			icon: path.join(__dirname, 'assets/Alinka-logo.png'),
			webPreferences: {
				backgroundThrottling: false
			}
		}
	);

	// Load the apropriate file depending on env mode
	mainWindow.loadURL(inDevelopmentMode ? `http://localhost:9000` : `file://${__dirname}/build/index.html`);
	
	// Build Menu from template and insert it
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	Menu.setApplicationMenu(mainMenu);

	// Display develooper tools in dev mode
	if (inDevelopmentMode) {
		mainWindow.webContents.openDevTools()
	}

	// Quit app when closed
  mainWindow.on('closed', () => {
    app.quit();
  })
})



/********/
/* Menu */
/********/
const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click(){
          app.quit();
        }
      }
    ]
  }
];

// If mac add empty object to menu
if (process.platform === 'darwin') {
  mainMenuTemplate.unshift({});
}

// Add developer tools item in dev mode
if (inDevelopmentMode){
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu: [
      {
        label: 'Toggle DevTools',
        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: 'reload'
      }
    ]
  })
}





/*********************/
/* Document Renderer */
/*********************/

ipcMain.on('print:value', (event, value) => {
  var doc = new DecisionCreate(value);
  doc.create();
  doc.save();
});

