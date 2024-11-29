import { ipcRenderer, contextBridge } from 'electron'

/* Vortex Core APIs */
contextBridge.exposeInMainWorld('vortexAPI', {
  platform: process.platform,
  windowControls: {
    minimize: () => { ipcRenderer.invoke('minimize-window') },
    restore: () => { ipcRenderer.invoke('restore-window') },
    close: () => { ipcRenderer.invoke('close-window') }
  }
})