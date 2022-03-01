import './breakLength.css';

function BreakLength({ breakLength, setBreakLength }) {
  return (
    <div className="length-wrapper">
      <div id="break-label">Break Length</div>
      <button id="break-decrement" onClick={() => setBreakLength(breakLength - 1)}>
      <span className="material-icons">remove</span>
      </button>
      <p id="break-length" className="length">{breakLength}</p>
      <button id="break-increment" onClick={() => setBreakLength(breakLength + 1)}>
      <span className="material-icons">add</span>
      </button>
    </div>
  )
}

export default BreakLength;