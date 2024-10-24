//React uses JSX to create UI components
//JSX is a syntax extension for JavaScript that allows us to write HTML-like syntax in JavaScript

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//createRoot is a function from ReactDOM that creates a root element for React to render into
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
//Open App.jsx to see the code