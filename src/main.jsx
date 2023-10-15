import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import ShopContextProvider from './Context/ShopContext.jsx';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(   
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
)
