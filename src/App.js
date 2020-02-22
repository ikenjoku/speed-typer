import React from 'react'
import useSpeedTyper from './hooks/useSpeedTyper'
import './App.css';

function App() {
  const {
     textAreaRef,
     gameIsRunning,
     textAreaContent,
     setTextAreaContent,
     timeRemaining,
     startGame,
     wordCount
    } = useSpeedTyper(13)

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
