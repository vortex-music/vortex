"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("vortexAPI", {
  platform: process.platform,
  getAppPath: async () => await electron.ipcRenderer.invoke("get-rootapp-path"),
  windowControls: {
    minimize: () => {
      electron.ipcRenderer.invoke("minimize-window");
    },
    restore: () => {
      electron.ipcRenderer.invoke("restore-window");
    },
    close: () => {
      electron.ipcRenderer.invoke("close-window");
    }
  }
});
