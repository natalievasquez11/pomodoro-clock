import './session.css';
import React, { useEffect } from 'react';

function Session({ timerMins, timerSecs, setTimer, sessionLength, breakLength, isPaused, setPlayPause, setSessionLength, setBreakLength, isInSession, setInSession }) {
  const tick = () => {
    //timer ended
    if(timerMins === 0 && timerSecs === 0) {
      setInSession(!isInSession);
    //seconds at zero, go to next minute
    } else if(timerSecs === 0) {
      setTimer([timerMins - 1, 59]);
    //reduce time by one second
    } else {
      setTimer([timerMins, timerSecs - 1]);
    }
  }

  const reset = () => {
    if(isInSession) {
      setTimer([parseInt(sessionLength), parseInt(0)]);
    } else {
      setTimer([parseInt(breakLength), parseInt(0)]);
    }
  }

  const hardReset = () => {
    setSessionLength(25);
    setBreakLength(5);
    setPlayPause(true);
    setInSession(true);
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      if(!isPaused) {
        tick();
      }
    }, 1000);
    return () => clearInterval(timerId);
  });

  useEffect(() => {
    reset();
  }, [isInSession])

  return (
    <div className="session-wrapper">
      {isInSession ? 
        <p id="timer-label">Session In Progress</p> : 
        <p id="timer-label">Break Time!</p>
      }
      <p id="time-left" className="length">
        {`${timerMins.toString().padStart(2, '0')}:${timerSecs.toString().padStart(2, '0')}`}
      </p>
      <div>
        <button id="start_stop" onClick={() => setPlayPause(!isPaused)}>
          <span className="material-icons">play_arrow</span>
          <span className="material-icons">pause</span>
        </button>
        <button id="reset" onClick={hardReset}>
        <span className="material-icons" >replay</span>
        </button>
      </div>
    </div>
  )
}

export default Session;