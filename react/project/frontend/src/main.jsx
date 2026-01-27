import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>    
 /* </StrictMode>,  */
 /**while using strictmode in useeffect it done their process twice to avoid that we comment the strictmode */

)
