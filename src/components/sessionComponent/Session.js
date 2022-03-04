import './session.css';
import React, { useEffect } from 'react';
import NotificationBeep from '../../audio/birds-singing.wav';

function Session({ timerMins, timerSecs, setTimer, sessionLength, breakLength, isPaused, setPlayPause, setSessionLength, setBreakLength, isInSession, setInSession }) {
  const audio = document.getElementById('beep');

  const tick = () => {
    //timer ended
    if(timerMins === 0 && timerSecs === 0) {
      setInSession(!isInSession);
    //seconds at zero, go to next minute
    } else if(timerSecs === 0) {
      setTimer([timerMins - 1, 59]);
    //reduce time by one second
    } else if(timerMins === 0 && timerSecs === 1){
      audio.play()
      setTimer([timerMins, timerSecs - 1]);
    } else {
      setTimer([timerMins, timerSecs - 1]);
    }
  }

  const hardReset = () => {
    setSessionLength(25);
    setBreakLength(5);
    setPlayPause(true);
    setInSession(true);
    audio.pause();
    audio.currentTime = 0;

    if(sessionLength !== timerMins) {
      setTimer([parseInt(sessionLength), parseInt(0)]);
    }

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
    const reset = () => {
      if(isInSession) {
        setTimer([parseInt(sessionLength), parseInt(0)]);
      } else {
        setTimer([parseInt(breakLength), parseInt(0)]);
      }
    };
    reset();
  }, [isInSession, sessionLength, breakLength, setTimer])

  return (
    <div className="session-wrapper">
      {isInSession ? 
        <p id="timer-label">Session In Progress</p> : 
        <p id="timer-label">Break Time!</p>
      }
      <p id="time-left" className="length">
        {`${timerMins.toString().padStart(2, '0')}:${timerSecs.toString().padStart(2, '0')}`}
      </p>
      <audio src={NotificationBeep} id="beep"/>
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