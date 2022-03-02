import './session.css';
import React, { useState, useEffect } from 'react';

function Session({ timerMins, timerSecs, setTimer, sessionLength, breakLength, isPaused, setPlayPause, setSessionLength, setBreakLength }) {

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

  const hardReset = () => {
    setSessionLength(25);
    setBreakLength(5);
    setPlayPause(true);
  }

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
      <p id="time-left" className="length">
        {`${timerMins.toString().padStart(2, '0')}:${timerSecs.toString().padStart(2, '0')}`}
      </p>
      <div>
        <button id="start_stop" onClick={() => setPlayPause(!isPaused)}>
          <span className="material-icons">play_arrow</span>
          <span className="material-icons">pause</span>
        </button>
        <button id="reset">
        <span className="material-icons" onClick={hardReset}>replay</span>
        </button>
      </div>
    </div>
  )
}

export default Session;