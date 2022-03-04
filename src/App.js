
import './App.css';
import BreakLength from './components/breakLengthComponent/BreakLength';
import SessionLength from './components/sessionLengthComponent/SessionLength';
import Session from './components/sessionComponent/Session';
import React, { useState } from 'react';
import Confetti from './components/confetti/Confetti';

function App() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [[timerMins, timerSecs], setTimer] = useState([sessionLength, 0]);
  const [isPaused, setPlayPause] = useState(true);
  const [isInSession, setInSession] = useState(true);

  return (
    <div className="App">
      <div className="lengths-div">
        <BreakLength breakLength={breakLength} setBreakLength={setBreakLength}
        isPaused={isPaused}/>
        <SessionLength sessionLength={sessionLength} setSessionLength={setSessionLength} 
        setTimer={setTimer} isPaused={isPaused}/>
      </div>
      <Session timerMins={timerMins} timerSecs={timerSecs} setTimer={setTimer} 
        sessionLength={sessionLength} breakLength={breakLength} 
        isPaused={isPaused} setPlayPause={setPlayPause}
        setSessionLength={setSessionLength} setBreakLength={setBreakLength}
        isInSession={isInSession} setInSession={setInSession}/>
      <Confetti timerMins={timerMins} timerSecs={timerSecs} isInSession={isInSession}/>
    </div>
  );
}
 
export default App;
