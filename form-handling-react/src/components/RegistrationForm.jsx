import React from 'react';
import { useState } from 'react'

//Form data is managed by the component’s state
//Fields for username, email, and password.

function RegistrationForm() {

const [username, setUserName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleChange = (e) => {
    const {name, value} = e.target;
   
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username)
    console.log(email)
    console.log(password)
};
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type='text'
        name='username'
        value = {username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <input 
        type='email'
        name='email'
        value = {email}
        onChange= {(e) => setEmail(e.target.value)}
        />
        <input 
        type='text'
        name='password'
        value = {password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type= "submit">Submit</button>
      
    </form>
  )
}

export default RegistrationForm