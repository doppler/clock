const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  let win = new BrowserWindow({
    width: 115,
    height: 40,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: false
    }
  });

  win.loadFile('index.html');

  // win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
};

app.on('ready', () => {
  setTimeout(createWindow, 300);
});

app.on('window-all-closed', () => {
  app.quit();
});
