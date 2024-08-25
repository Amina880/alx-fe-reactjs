import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider}  from "react-router-dom";
import './index.css'
import  RecipeDetail  from './components/RecipeDetails.jsx';
import RecipeList from './components/RecipeList.jsx';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import { router } from './App.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

