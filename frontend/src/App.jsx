import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

useEffect(() => {
  axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.error('Error fetching jokes:', error); 
    })
})


  return (
    <>
      <h1>react + vite</h1>
      <p>Jokes: {jokes.length}</p>
      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
