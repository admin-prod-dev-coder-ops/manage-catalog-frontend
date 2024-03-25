import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from './app/store/store.ts'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes } from 'react-router-dom'
import App from './app/layout/App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
