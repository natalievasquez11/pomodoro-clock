import './breakLength.css';

function BreakLength({ breakLength, setBreakLength }) {
  return (
    <div className="length-wrapper">
      <div id="break-label">Break Length</div>
      <button id="break-decrement">break decrement</button>
      <p id="break-length" className="length">{breakLength}</p>
      <button id="break-increment">break increment</button>
    </div>
  )
}

export default BreakLength;