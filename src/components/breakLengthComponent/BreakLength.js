import './breakLength.css';

function BreakLength({ breakLength, setBreakLength, isPaused }) {

  const handleSetBreakLength = (e) => {
    if(e.target.className.includes("decrement")) {
      setBreakLength(breakLength - 1);
    } else if(e.target.className.includes("increment")) {
      setBreakLength(breakLength + 1);
    }
  }

  return (
    <div className="length-wrapper">
      <div id="break-label">Break Length</div>
      <div className="inc-dec-wrapper">
        <button id="break-decrement" className="decrement"
        onClick={(e) => handleSetBreakLength(e)}
        disabled={!isPaused || breakLength === 1}>
          <span className="material-icons decrement">remove</span>
        </button>
        <span className="length-span">
          <p id="break-length" className="length">{breakLength}</p>
        </span>
        <button id="break-increment" className="increment"
        onClick={(e) => handleSetBreakLength(e)}
        disabled={!isPaused || breakLength === 60}>
          <span className="material-icons increment">add</span>
        </button>
      </div>
    </div>
  )
}

export default BreakLength;