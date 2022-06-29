import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.scss'
const url ='http://localhost:3032/flashcards'
function App() {
  const [flashcards, setFlashcards] = useState([])
useEffect(() =>{
(async () => {
  setFlashcards((await axios .get(url)).data)
})();
}, [])

  return (
    <div className="App">
      <h1>flashcards</h1>
      <p>there are {flashcards.length} flashcards</p>
    </div>
  )
}

export default App
