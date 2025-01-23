const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        width: 1200,
        height: 700
    });
    mainWindow.setMenuBarVisibility(false);

    mainWindow.setTitle('Glowing Bear');
    mainWindow.loadFile('build/index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
