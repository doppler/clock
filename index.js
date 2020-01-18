const { app, BrowserWindow, screen } = require('electron');

const width = 115;
const height = 36;
let x, y;

const createWindow = () => {
  let win = new BrowserWindow({
    width,
    height,
    x,
    y,
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

  let displays = screen.getAllDisplays();
  displays.forEach(display => console.log(display));

  let displaySize = displays[1].size;
  x = displaySize.width - width - height;
  y = 0;
});

app.on('window-all-closed', () => {
  app.quit();
});
