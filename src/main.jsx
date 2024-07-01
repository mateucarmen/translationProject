import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './scss/index.css'
import TranslationProvider from './Context/INTLContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TranslationProvider> {/* Importamos el TranslationProvider porque en INTLContext hemos importado el TranslationContext.Provider, para ahorrar pasos */}
    <App /> {/* Es una prop children, porque se pasa entre componentes */}
    </TranslationProvider>
  </React.StrictMode>,
)
