import React from 'react'
import ReactDOM from 'react-dom/client'

// import App component
import App from './App.jsx'

// import bootstrap css and js
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// import custom css
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
