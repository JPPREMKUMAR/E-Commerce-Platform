import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainContextProvider from "./context/MainContext"
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>


    <MainContextProvider>
      <App />
    </MainContextProvider></BrowserRouter>
)
