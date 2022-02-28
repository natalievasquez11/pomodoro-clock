import './session.css';
import React, { useState, useEffect } from 'react';

function Session({ minsSecs }) {

  const { minutes = 0, seconds = 0 } = minsSecs;  
  const [[mins, secs], setTime] = useState([minutes, seconds]);
  const [isPaused, setPlayPause] = useState(true);

  const tick = () => {
    //timer ended
    if(mins === 0 && secs === 0) {
      reset();
    //seconds at zero, go to next minute
    } else if(secs === 0) {
      setTime([mins - 1, 59]);
    //reduce time by one second
    } else {
      setTime([mins, secs - 1]);
    }
  }

  const reset = () => setTime([parseInt(minutes), parseInt(seconds)]);

  useEffect(() => {
    const timerId = setInterval(() => {
      if(!isPaused) {
        tick();
      }
    }, 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div className="session-wrapper">
      <p id="timer-label">Session</p>
      <p id="time-left">{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p>
      <button id="start_stop" onClick={() => setPlayPause(!isPaused)}>play pause</button>
      <button id="reset">reset</button>
    </div>
  )
}

export default Session;