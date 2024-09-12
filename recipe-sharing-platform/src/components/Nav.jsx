import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className='text-xl mx-auto max-w-fit italic '>
        <ul>
            <li>
                <Link className='p-2 mr-2 bg-slate-100 border-2 border-stone-500' to="/">Home </Link>
                <Link className='p-2 mr-2 bg-slate-100 border-2 border-stone-500' to="/add-recipe-form"> Add New Recipe</Link>
            </li>
        </ul>
    </nav>

  )
}

export default Nav
