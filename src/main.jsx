import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { TextProvider } from './context/TextContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <TextProvider>
        <App />
      </TextProvider>
    </ThemeProvider>
  </StrictMode>,
)
