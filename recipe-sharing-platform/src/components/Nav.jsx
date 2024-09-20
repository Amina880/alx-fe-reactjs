import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className='text-xl mx-auto max-w-fit italic flex '>
        
                <Link className='p-2 mr-2 bg-slate-100 border-2 border-stone-500' to="/">Home </Link>
                <Link className='p-2 mr-2 bg-slate-100 rounded-3xl border-2 border-stone-100  ' to="/add-recipe-form">
                <img className='w-8' src="https://img.icons8.com/ios/50/000000/plus.png" alt="plus"/>
                </Link>
            
    </nav>

  )
}

export default Nav
