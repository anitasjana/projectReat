import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Couter.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <h1>anitas</h1>
    <h1>jana</h1> */}

    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
