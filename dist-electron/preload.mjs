"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("vortexAPI", {
  platform: process.platform,
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
