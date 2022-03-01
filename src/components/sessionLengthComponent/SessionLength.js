import './sessionLength.css';

function SessionLength({ sessionLength, setSessionLength }) {
  return(
    <div className="length-wrapper">
      <div id="session-label">Session Length</div>
      <button id="session-decrement" onClick={() => setSessionLength(sessionLength - 1)}>
      <span className="material-icons">remove</span>
      </button>
      <p id="session-length" className="length">{sessionLength}</p>
      <button id="session-increment" onClick={() => setSessionLength(sessionLength + 1)}>
        <span className="material-icons">add</span>
      </button>
    </div>
  )
}


export default SessionLength;