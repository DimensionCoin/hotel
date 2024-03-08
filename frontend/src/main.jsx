import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './page/App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WalletAdapter from './components/network/WalletAdapter'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WalletAdapter>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
      </Routes>
      </BrowserRouter>
    </WalletAdapter>
  </React.StrictMode>,
)
