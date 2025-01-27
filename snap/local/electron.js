const electron = require('electron');
const { app, BrowserWindow, shell, Notification } = electron;

let mainWindow;

app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required")
app.on('ready', () => {

    mainWindow = new BrowserWindow({
        width: 1200,
        height: 700
    });
    mainWindow.setMenuBarVisibility(false);

    mainWindow.setTitle('Glowing Bear');
    mainWindow.loadFile('build/index.html');

    mainWindow.webContents.setWindowOpenHandler((details) => {
        shell.openExternal(details.url);
        return { action: 'deny' }
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
