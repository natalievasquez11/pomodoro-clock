import './session.css';
import React, { useState, useEffect } from 'react';

function Session({ minsSecs }) {

  const { minutes = 0, seconds = 0 } = minsSecs;
  const [[mins, secs], setTime] = useState([minutes, seconds]);

  const tick = () => {
    if(mins === 0 && secs === 0) {
      reset();
    } else if(secs === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, secs - 1]);
    }
  }

  const reset = () => setTime([parseInt(minutes), parseInt(seconds)]);

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  })



  return (
    <div className="session-wrapper">
      <p id="timer-label">Session</p>
      <p id="time-left">{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p>
      <button id="start_stop">play pause</button>
      <button id="reset">reset</button>
    </div>
  )
}

export default Session;