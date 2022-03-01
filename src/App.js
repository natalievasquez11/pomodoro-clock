
import './App.css';
import BreakLength from './components/breakLengthComponent/BreakLength';
import SessionLength from './components/sessionLengthComponent/SessionLength';
import Session from './components/sessionComponent/Session';
import React, { useState } from 'react';

function App() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [[timerMins, timerSecs], setTimer] = useState([sessionLength, 0]);
  // let minsSecs = { minutes: sessionLength, seconds: 0 };

  return (
    <div className="App">
      <div className="lengths-div">
        <BreakLength breakLength={breakLength} setBreakLength={setBreakLength}/>
        <SessionLength sessionLength={sessionLength} setSessionLength={setSessionLength}/>
      </div>
      <Session timerMins={timerMins} timerSecs={timerSecs} setTimer={setTimer} 
        sessionLength={sessionLength} breakLength={breakLength}/>
    </div>
  );
}
 
export default App;
