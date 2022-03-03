import './breakLength.css';

function BreakLength({ breakLength, setBreakLength, isPaused }) {
  return (
    <div className="length-wrapper">
      <div id="break-label">Break Length</div>
      <div className="inc-dec-wrapper">
        <button id="break-decrement" 
        onClick={() => setBreakLength(breakLength - 1)}
        disabled={!isPaused || breakLength === 1}>
          <span className="material-icons">remove</span>
        </button>
        <span className="length-span">
          <p id="break-length" className="length">{breakLength}</p>
        </span>
        <button id="break-increment" 
        onClick={() => setBreakLength(breakLength + 1)}
        disabled={!isPaused || breakLength === 60}>
          <span className="material-icons">add</span>
        </button>
      </div>
    </div>
  )
}

export default BreakLength;