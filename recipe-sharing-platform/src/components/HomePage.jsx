import { useState, useEffect } from "react";
import  data  from "../data.json"

function HomePage() {

const [responses, setresponses] = useState([])

useEffect(() => {
    setresponses(data);
}, [])


  return (
    <>
   
    <h1 className="p-12 text-2xl md:text-3xl text-center">Recipe Sharing Platform</h1>
    <div>

      <div className="mx-auto max-w-fit ">
        {responses.map((food) => (
          <div className="w-60 md:w-full odd:bg-gray-100 even:bg-white rounded-xl hover:shadow-xl" key={food.id}>
            <br></br>
            <p className=" text-lg md:text-2xl semibold text-center p-2 md:p-0">{food.title}</p>
            <div className="md:flex md:">
            <img className="w-64 h-70 p-6 hover:scale-105" src={food.image} />
            <p className="text-base md:text-lg text-wrap text-center md:pt-20 ">{food.summary}</p>
            </div>
            <br></br>
          </div>
        ))}
      </div>
      
    </div>
    
    </>
  )
}

export default HomePage
