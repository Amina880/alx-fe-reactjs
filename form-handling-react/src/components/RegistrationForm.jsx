import React from 'react';
import { useState } from 'react'

//Form data is managed by the component’s state
//Fields for username, email, and password.

function RegistrationForm() {

const [username, setUserName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [errors, setErrors] = useState({});

const formError ={}; 

const handleSubmit = (e) => {
    e.preventDefault()
    if (!username){
      errors.username('Username must be more than 5 characters')
      return;
    }
    if (!email){
      errors.email('Invalid email')
      return;
    }
    if (!password){
      errors.password('Password must be more than 5 characters')
      return;
    }
    setErrors(formError)
    console.log(username)
    console.log(email)
    console.log(password)

};
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type='text'
        name='username'
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        />
        <input 
        type='email'
        name='email'
        value={email}
        onChange= {(e) => setEmail(e.target.value)}
        />
        <input 
        type='password'
        name='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type= "submit">Submit</button>
      
    </form>
  )
}

export default RegistrationForm