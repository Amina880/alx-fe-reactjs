//Include input fields for the recipe title, ingredients (as a textarea), and preparation steps (also as a textarea).
//Add a submit button to post the form data.
import React from 'react';
import { useState } from 'react'
import Nav from './Nav';

//Form data is managed by the component’s state

function Form() {

const [formData, setFormData] = useState({title: '', ingredients: '', instructions:''})
const [errors, setErrors]= useState({})
const resetForm = () => setFormData({title: '', ingredients: '', instructions:''});

const handleChange = (e) => {
    const {name, value} = e.target.value;
    setFormData (prevState => ({...prevState, [name]: value}))
}

 // Validation function
  const validate = () => {
    let errors = {};

    if (formData.title.trim() === '') {
      errors.title = 'Title is required';
    }
    if (formData.ingredients.trim() === '' || formData.ingredients.length < 10) {
      errors.ingredients = 'Ingredients must be at least 10 characters';
    }
    if (formData.instructions.trim() === '' || formData.instructions.length < 10) {
      errors.instructions = 'Instructions must be at least 10 characters';
    }

    return errors;
  };


const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formData);
      resetForm();
      setErrors({});
    }
};
  return (
    <>
    <br></br>
    <Nav />
    <form className='mx-auto md:p-40 p-10 mt-10 bg-gray-100 w-fit rounded-xl shadow-md' onSubmit={handleSubmit}>
        <p className='font-mono italic md:text-xl text-lg '>Recipe Title:</p>
        <input 
        className='border-4 border-stone-300 mb-4 sm:w-80 w-40 '
        type='text'
        name='title'
        value = {formData.title}
        onChange={handleChange}
        
        />
        {errors.title && <p className="text-red-400">{errors.title}</p>}

        <br></br>
        <p className=' font-mono italic md:text-xl text-lg'>Ingredients:</p>
        <input 
        className='border-4 border-stone-300 p-6 mb-4 sm:w-80 w-40'
        type='textarea'
        name='ingredients'
        value = {formData.ingredients}
        onChange={handleChange}
        
        />
        {errors.ingredients && <p className="text-red-400">{errors.ingredients}</p>}

        <br></br>
        <p className=' font-mono italic md:text-xl text-lg'>Instructions:</p>
        <input 
        className='border-4 border-stone-300 p-6 mb-4 sm:w-80 w-40 '
        type='textarea'
        name='instructions'
        value = {formData.instructions}
        onChange={handleChange}
        />
        {errors.instructions && <p className="text-red-400">{errors.instructions}</p>}

        <br></br>
        <button className='bg-blue-300 mx-auto w-full p-2 hover:shadow-lg font-semibold md:text-xl text-lg' type= "submit">Submit</button>
      
    </form>
    </>
  )
}

export default Form

