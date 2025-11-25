import './css/global.css'
import './css/home.css'
import './css/movieDetail.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import Header from './components/Header'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
      <Header />
    </BrowserRouter>
  </StrictMode>
)
