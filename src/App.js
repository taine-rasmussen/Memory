import './App.css';
import { useState } from 'react'

function App() {

  const [number, setNumber] = useState(Math.floor(Math.random() * 100))
  const [input, setInut] = useState('')
  const [guessResponse, setGuessResponse] = useState('Can you guess the random number?')

  const handleGuess = (e) => {
    e.preventDefault()
    if( number == input){
      setGuessResponse('Correct!')
      setNumber(Math.floor(Math.random() * 100))
    } else if(input < number){
      setGuessResponse('Higher')
    } else if( input > number){
      setGuessResponse('Lower')
    } else {
      setGuessResponse('????')
    }
    setInut('')
  }


  return (
    <div className="App">
      <h2>{}</h2>
      <h3>{guessResponse}</h3>
      <form onSubmit={handleGuess}>
        <input
          type='text'
          placeholder='Enter number...'
          value={input}
          onChange={(e) => {setInut(e.target.value)}}
        />
        <button>Guess</button>
      </form>
    </div>
  );
}

export default App;
