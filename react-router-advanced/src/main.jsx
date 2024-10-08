import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider} from 'react-router-dom'
import './index.css'
import { RouterProvider } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   < RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)