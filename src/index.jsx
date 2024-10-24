//React uses JSX to create UI components
//JSX is a syntax extension for JavaScript that allows us to write HTML-like syntax in JavaScript

import { StrictMode } from 'react'// eslin: 'StrictMode' is declared but its value is never read
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//createRoot is a function from ReactDOM that creates a root element for React to render into
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <App />,
  // </StrictMode>
  //StrictMode is a component that enables React to work with Concurrent Mode (also known as Async Mode)
  //It's a development tool that checks for common issues in a component's render method
  //If you see an error in your console, you'll know that the issue is probably because of a component that's out of sync with the browser's rendering
)
//Open App.jsx to see the code