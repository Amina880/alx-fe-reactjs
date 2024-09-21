import React from 'react'
import { useState } from 'react'
import  fetchUserData  from '../services/githubService'

function Search() {

const [username, setUsername] = useState('')
const [location, setLocation] = useState('')
const [minRepos, setMinRepos] = useState('')
const [userData, setUserData]= useState(null)
const [loading, setLoading]= useState(false)
const [errors, setErrors]= useState({})
const resetForm = () => setUsername('');

const login = (e) => {
    setUsername(e.target.value);
}
const loginLocation = (e) => {
    setLocation(e.target.value);
}
const loginMinRepos = (e) => {
    setMinRepos(e.target.value);
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
      const data = await fetchUserData({username, location, minRepos});
      setUserData(data.items);
     
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
    <div className='flex w-fit mx-auto'>
    <form>
        <div className=' mx-auto md:p-8 p-6 md:pb-20 pb-14 bg-stone-200 rounded-lg shadow-md'>
        <input className='w-full mx-auto border-2 p-1 border-grey-700 rounded-lg mt-4' type="text" placeholder='Enter Username' required onChange={login} />
        <br></br>
        <br></br>
        <p className='py-6 font-semibold text-slate-600'>Search by:</p>
        <input className=' mr-2 border-2 p-1 border-grey-600 rounded' type="text" placeholder='Location' onChange={loginLocation} />
        <input className='border-2 p-1 border-grey-600 rounded' type="number" placeholder='Number of Repos'  onChange={loginMinRepos} />
        <br></br>
        <br></br>
        {errors.username && <p>{errors.username}</p>}
        <button className='bg-sky-400 text-lg text-slate-600 flex font-semibold px-4 mx-auto p-2 mt-8 rounded-xl hover:shadow-lg hover:bg-sky-300 ' type="submit" onClick={onSubmit}>Search</button>
        
        </div>
    </form>

        {loading ? (<div className='bg-slate-100 px-20 rounded-lg shadow-md'> <p className='md:text-xl text-lg py-12'> Loading...</p></div>)
        : errors.username ? (<div className='bg-slate-100 md:px-20 px-14 rounded-lg shadow-md' > <p className='md:text-xl text-lg py-12 wrap '>Looks like we cant find the user</p></div>)
        :userData ?
        (
        <div>
        {userData.map(user => (
        <div key={user.id} className='bg-slate-100 px-8 rounded-lg shadow-md'>
          <h2 className='text-slate-600 md:text-2xl text-xl text-center font-semibold pt-6  '>{user.login}</h2>
          <p className='text-slate-500 md:text-xl text-lg text-center '>{user.html_url}</p>
          <p className='text-slate-500 md:text-xl text-lg text-center '>{user.location}</p>
          <p className='text-slate-500 md:text-xl text-lg text-center ' >{user.repos_url}</p>
          <img className='w-52 mx-auto rounded p-4 pt-10' src={user.avatar_url} alt="Avatar" />
        </div>
        ))}
        </div>
        )
      :(<p>No user found</p>)
    }
    </div>
    </>
    
  )
}

export default Search

