import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

/* Import Root Fonts and Styles */
import './styles/root.css'
import './fonts/inter.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
