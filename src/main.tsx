import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Provider} from "react-redux";

/* Import Root Fonts and Styles */
import './styles/themes.css'
import './styles/root.css'
import './fonts/inter.css'

/* Import Redux Store */
import store from './store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)