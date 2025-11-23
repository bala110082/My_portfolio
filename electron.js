// electron.js (CommonJS)
const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = !app.isPackaged; // true in "electron-dev", false in packaged exe

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  if (isDev) {
    // Next.js dev server
    win.loadURL("http://localhost:3000");
  } else {
    // Production: load exported static build if present, else fallback to local server URL
    // Prefer offline static export:
    const indexPath = path.join(__dirname, "out", "index.html");
    win.loadFile(indexPath).catch(() => {
      // Fallback (only if you ship a server yourself; most people won’t):
      win.loadURL("http://localhost:3000");
    });
  }
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
