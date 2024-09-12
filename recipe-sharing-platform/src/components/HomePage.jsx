import { useState, useEffect } from "react";
import  data  from "../data.json"
import Nav from "./Nav";
import { Link } from "react-router-dom";

function HomePage() {

const [responses, setresponses] = useState([])

useEffect(() => {
    setresponses(data);
}, [])


  return (
    <>
   
    <h1 className="p-12 text-2xl md:text-3xl text-center">Recipe Sharing Platform</h1>
    <Nav />
    <div>

      <div className="mx-auto max-w-fit md:grid md:grid-cols-3 pt-6 md:px-8 sm:grid sm:grid-cols-2 grid grid-cols-1 ">
        {responses.map((food) => (
            <Link to={`/recipe/${food.id}`}>
            <div className="w-60 h-full md:w-full bg-gray-200 border-2 border-stone-300 rounded-xl hover:shadow-2xl" key={food.id}>
            <br></br>
            <p className=" text-lg md:text-2xl semibold text-center p-2 ">{food.title}</p>   
            <img className="w-64 h-70 p-6 md:mx-auto hover:scale-105" src={food.image} />
            <p className="text-base md:text-lg  md:px-4 text-wrap text-center ">{food.summary}</p>
            <br></br>
          </div>
          </Link>
        ))}
      </div>
      
    </div>
    
    </>
  )
}

export default HomePage
