import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router,Route ,Routes,createBrowserRouter } from 'react-router-dom'
import Profile, { ProfileDetails, ProfileSettings } from './components/Profile'

export const router = createBrowserRouter(createRoutesFromElements(
  <Routes>
  <Routes path='/' element= {<Profile/>}></Routes>
    <Route path="profile details" element= {<ProfileDetails />}></Route>
    <Route path="profile settings" element= {<ProfileSettings />}></Route>
    <Route path="/blog/:id" element={<BlogPost />} />
    <ProtectedRoute path="/profile" element={<Profile />} />
  </Routes>
))



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
