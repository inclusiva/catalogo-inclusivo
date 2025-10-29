import './css/global.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Olá, mundo!</h1>
  </StrictMode>,
)
