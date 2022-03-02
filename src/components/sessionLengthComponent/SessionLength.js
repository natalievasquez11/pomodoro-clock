import { useEffect } from 'react';
import './sessionLength.css';

function SessionLength({ sessionLength, setSessionLength, setTimer, isPaused }) {

  const handleSetSessionLength = (e) => {
    if(e.target.className.includes("decrement")) {
      setSessionLength(sessionLength - 1);
    } else if(e.target.className.includes("increment")) {
      setSessionLength(sessionLength + 1);
    }
  }

  useEffect(() => {
    setTimer([parseInt(sessionLength), parseInt(0)])
  },[sessionLength]);

  return(
    <div className="length-wrapper">
      <div id="session-label">Session Length</div>
      <button id="session-decrement" className="decrement" 
      onClick={(e) => handleSetSessionLength(e)}
      disabled={!isPaused || sessionLength === 0}>
        <span className="material-icons decrement">remove</span>
      </button>
      <span className="length-span">
        <p id="session-length" className="length">{sessionLength}</p>
      </span>
      <button id="session-increment" className="increment" 
      onClick={(e) => handleSetSessionLength(e)}
      disabled={!isPaused || sessionLength === 60}>
        <span className="material-icons increment">add</span>
      </button>
    </div>
  )
}


export default SessionLength;