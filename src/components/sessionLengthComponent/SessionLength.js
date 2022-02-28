import './sessionLength.css';

function SessionLength({ sessionLength, setSessionLength }) {
  return(
    <div className="length-wrapper">
      <div id="session-label">Session Length</div>
      <button id="session-decrement">session decrement</button>
      <p id="session-length" className="length">{sessionLength}</p>
      <button id="session-increment">session increment</button>
    </div>
  )
}


export default SessionLength;