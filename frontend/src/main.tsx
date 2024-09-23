import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {Toaster} from 'react-hot-toast'

import store from './reducer/store';
import AppRouter from './Router.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <AppRouter />
        <Toaster />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
)
