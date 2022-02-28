import './session.css';
import React, { useState, useEffect } from 'react';

function Session({ timerMins, timerSecs, setTimer, sessionLength, breakLength }) {

  // const { minutes = 0, seconds = 0 } = minsSecs;  
  // const [[mins, secs], setTime] = useState([minutes, seconds]);
  const [isPaused, setPlayPause] = useState(true);

  const tick = () => {
    //timer ended
    if(timerMins === 0 && timerSecs === 0) {
      reset();
    //seconds at zero, go to next minute
    } else if(timerSecs === 0) {
      setTimer([timerMins - 1, 59]);
    //reduce time by one second
    } else {
      setTimer([timerMins, timerSecs - 1]);
    }
  }

  const reset = () => setTimer([parseInt(sessionLength), parseInt(0)]);

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
      <p id="time-left">{`${timerMins.toString().padStart(2, '0')}:${timerSecs.toString().padStart(2, '0')}`}</p>
      <button id="start_stop" onClick={() => setPlayPause(!isPaused)}>play pause</button>
      <button id="reset">reset</button>
    </div>
  )
}

export default Session;