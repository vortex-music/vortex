import { ipcMain, app, BrowserWindow } from "electron";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";
createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
process.env.APP_ROOT = path.join(__dirname, "..");
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, "public") : RENDERER_DIST;
let win;
ipcMain.handle("close-window", () => {
  win == null ? void 0 : win.close();
});
ipcMain.handle("minimize-window", () => {
  win == null ? void 0 : win.minimize();
});
ipcMain.handle("restore-window", () => {
  (win == null ? void 0 : win.isMaximized()) ? win.restore() : win == null ? void 0 : win.maximize();
});
ipcMain.handle("get-rootapp-path", () => app.getAppPath());
function createWindow() {
  win = new BrowserWindow({
    /* App Icon, Title Bar */
    titleBarStyle: process.platform !== "linux" ? "hidden" : "default",
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    /* Traffic Lights Position (macOS) */
    ...process.platform !== "darwin" ? {} : { trafficLightPosition: { x: 18, y: 18 } },
    /* Default Width and Height */
    width: 1300,
    height: 700,
    /* Minimum Width and Height */
    minWidth: 1150,
    minHeight: 450,
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs")
    }
  });
  win.removeMenu();
  win.webContents.openDevTools({ mode: "detach" });
  win.webContents.on("did-finish-load", () => {
    win == null ? void 0 : win.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  });
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(RENDERER_DIST, "index.html"));
  }
}
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
app.whenReady().then(createWindow);
export {
  MAIN_DIST,
  RENDERER_DIST,
  VITE_DEV_SERVER_URL
};
