import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/homeComponent.jsx'
import Navigation from './components/navigationComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation />
    <App />
    <Home />
  </React.StrictMode>
)
