import React from 'react'
import data from '../data.json'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Nav from './Nav';


function RecipeDetail() {
const {foodId} = useParams(); 
const [food, setFood] = useState(null);

useEffect(() => {
    console.log("Food ID:", foodId); 
    console.log("Data:", data)
    const fetchedRecipe = data.find((item) => item.id === parseInt(foodId, 10));
    console.log("Fetched Recipe:", fetchedRecipe);
    setFood(fetchedRecipe);
}, [foodId])

if(!food) {
    return <div>Loading...</div>;
  }

 return (
    <>
    <br></br>
    <Nav />
    <br></br>
    <div className='w-60 md:w-[40rem] p-4 bg-gray-100 mx-auto rounded-xl hover:shadow-xl'>
     <h1 className='md:text-2xl mx-auto w-fit text-xl p-4 pt-8 font-semibold '>{food.title}</h1>
     <img className="w-64 h-70 p-6 mx-auto hover:scale-105" src={food.image} />
     <h2 className='md:text-xl mx-auto w-fit text-lg p-4 pb-8 italic text-gray-700'>Ingredients</h2>
     <p className='md:text-lg text-base mx-auto w-fit text-center px-4'>{food.ingredients}</p>
     <h2 className='md:text-xl mx-auto w-fit text-lg p-4 pb-8 pt-6 italic text-gray-700'>Cooking Instructions</h2>
     <p className='md:text-lg text-base mx-auto w-fit text-center px-4 pb-8'>{food.instructions}</p>
    </div>
    </>
  )
}

export default RecipeDetail
