import React from 'react';
import { useState } from 'react'

//Form data is managed by the component’s state
//Fields for username, email, and password.

function RegistrationForm() {

const [formData, setFormData] = useState({username: '', email: '', password: ''})

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData (prevState => ({...prevState, [name]: value}))
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
};
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type='text'
        name='name'
        value = {formData.username}
        onChange={handleChange}
        />
        <input 
        type='email'
        name='email'
        value = {formData.email}
        onChange={handleChange}
        />
        <input 
        type='password'
        name='password'
        value = {formData.password}
        onChange={handleChange}
        />
        <button type= "submit">Submit</button>
      
    </form>
  )
}

export default RegistrationForm