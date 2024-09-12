import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className='text-xl mx-auto max-w-fit p-4 italic bg-slate-100 '>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
    </nav>

  )
}

export default Nav
