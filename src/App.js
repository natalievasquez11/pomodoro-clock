
import './App.css';
import BreakLength from './components/breakLengthComponent/BreakLength';
import SessionLength from './components/sessionLengthComponent/SessionLength';
import Session from './components/sessionComponent/Session';
import React, { useState } from 'react';

function App() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  let minsSecs = { minutes: sessionLength, seconds: 0 };

  return (
    <div className="App">
      <BreakLength breakLength={breakLength} setBreakLength={setBreakLength}/>
      <SessionLength sessionLength={sessionLength} setSessionLength={setSessionLength}/>
      <Session  minsSecs={minsSecs} />
    </div>
  );
}
 
export default App;
