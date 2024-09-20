import React from 'react'
import { useState } from 'react'
import  fetchUserData  from '../services/githubService'

function Search() {

const [username, setUsername] = useState('')
const [userData, setUserData]= useState(null)
const [loading, setLoading]= useState(false)
const [errors, setErrors]= useState({})
const resetForm = () => setUsername('');

const login = (e) => {
    setUsername(e.target.value);
}
const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
    resetForm();
    setErrors({});
    }

    setLoading(true)

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } 
    catch (error) {
        console.error('Looks like we cant find the user', error);
        setUserData(null);
    }

    setLoading(false)
};  

const validate = () => {
    let errors = {};
    if (username.trim() === '') {
      errors.username = 'Username is required';
    }
    return errors;
  }


  return (
    <>
    <form>
        <input type="text" placeholder='Enter Username' required onChange={login} />
        <button type="submit" onClick={onSubmit}>Search</button>
        {errors.username && <p>{errors.username}</p>}
         </form>

        {loading ? (<p> Loading...</p>)
        : errors.username ? (<p>Looks like we cant find the user</p>)
    
        :userData ?
        (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <img src={userData.avatar_url} alt="Avatar" />
        </div>
      ):(<p>No user found</p>)
    }
    </>
  )
}

export default Search

