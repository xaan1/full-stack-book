import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {BrowserRouter} from   "react-router-dom"
import AuthProvider from './contex/authContex'
import { Toaster } from 'react-hot-toast'
import Toastprvider from './components/Toastprvider'
import InstrcTureProvider from './contex/InstrcTureContex'
import { CartProvider } from './contex/cart/ShopContex'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <Toastprvider />
    <InstrcTureProvider>
      <CartProvider>
      <App />
      </CartProvider>
  
    </InstrcTureProvider>
    
   
    </AuthProvider>
   
    </BrowserRouter>
   
  </StrictMode>,
)
