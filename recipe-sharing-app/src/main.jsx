import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider}  from "react-router-dom";
import './index.css'
import { RecipeDetails } from './components/RecipeDetails.jsx';
import RecipeList from './components/RecipeList.jsx';
import AddRecipeForm from './components/AddRecipeForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RecipeDetails,
  },
  {
    path: "/recipelist",
    Component: RecipeList,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

