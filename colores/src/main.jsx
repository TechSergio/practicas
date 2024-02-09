import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ColoresProvider } from './Components/ColoresContexto.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ColoresProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ColoresProvider>
)
