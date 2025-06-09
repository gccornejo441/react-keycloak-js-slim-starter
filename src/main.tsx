import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { KeycloakAuthProvider } from './KeycloakProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KeycloakAuthProvider>
      <App />
    </KeycloakAuthProvider>
  </StrictMode>,
)
