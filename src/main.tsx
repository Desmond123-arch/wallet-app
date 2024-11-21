import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import PageContextProvider from './contexts/contextProvider/PageContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <PageContextProvider>
            <App />
        </PageContextProvider>
    </StrictMode>
)
