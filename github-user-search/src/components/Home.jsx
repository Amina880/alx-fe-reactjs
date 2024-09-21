import React from 'react'
import Search from './Search'

function Home() {
  return (
    <div>
      <h1 className='md:text-3xl text-2xl p-10 w-fit mx-auto semibold text-slate-600 '>Find A GitHub User</h1>
      <Search />
    </div>
  )
}

export default Home
