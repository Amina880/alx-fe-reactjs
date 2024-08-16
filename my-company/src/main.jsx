import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router2 } from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  < RouterProvider router={router2}></RouterProvider>
  </StrictMode>,
)
