import './session.css';

function Session() {
  return (
    <div className="session-wrapper">
      <p id="timer-label">Session</p>
      <p id="time-left">25:00</p>
      <button id="start_stop">play pause</button>
      <button id="reset">reset</button>
    </div>
  )
}

export default Session;