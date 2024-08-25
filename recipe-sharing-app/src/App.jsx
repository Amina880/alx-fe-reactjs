import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetail from './components/RecipeDetails'
import { createBrowserRouter,createRoutesFromElements ,Route, RouterProvider } from 'react-router-dom'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'


export const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element= {<RecipeDetail />}>
    <Route path="recipelist" element= {<RecipeList />}></Route>
  </Route>
))

function App() {
  
  return (
    <>
      <RecipeList />
      <AddRecipeForm />
      <FavoritesList />
      <RecommendationsList/>
    </>
  )
}

export default App;
