import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import PostsComponent from './components/PostsComponent';
import './App.css'

 const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>

      
    </>
  )
}

export default App
