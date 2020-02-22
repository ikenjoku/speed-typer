import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const TIME_REMAINING = 10
function App() {
  const [wordCount, setWordCount] = useState(0)
  const [gameIsRunning, setGameisRunning] = useState(false)
  const [textAreaContent, setTextAreaContent] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(TIME_REMAINING)
  const textAreaRef = useRef(null)

  const countWords = (str) => {
    const count = str ? str.match(/(\w+)/g).length : 0
    setWordCount(count)
  }

  const startGame = () => {
    setTimeRemaining(TIME_REMAINING)
    setTextAreaContent('')
    setWordCount(0)
    setGameisRunning(true)
    console.log('textAreaRef', textAreaRef)
    textAreaRef.current.disabled = false
    textAreaRef.current.focus()
  }

  const endGame = () => {
    setGameisRunning(false)
    countWords(textAreaContent)
  }

  useEffect(() => {
    if (timeRemaining > 0 && gameIsRunning) {
      const timerId = setTimeout(() => {
        const newTimeRemaining = timeRemaining - 1
        setTimeRemaining(newTimeRemaining)
      }, 1000)
      return () => {
        clearTimeout(timerId)
      }
    } else if (timeRemaining === 0){
      endGame()
    }
  }, [timeRemaining, gameIsRunning])

  return (
    <div>
      <h1>SPEED-TYPER</h1>
      <textarea
        ref={textAreaRef}
        disabled={!gameIsRunning}
        value={textAreaContent}
        onChange={e => setTextAreaContent(e.target.value)}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame}>Start Game</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  )
}

export default App;
