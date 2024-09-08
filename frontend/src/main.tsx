import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <SnackbarProvider>
    <App />
    </SnackbarProvider>
    </BrowserRouter>
  </StrictMode>,
)
