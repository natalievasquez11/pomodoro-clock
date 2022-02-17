import './breakLength.css';

function BreakLength() {
  return (
    <div className="length-wrapper">
      <div id="break-label">Break Length</div>
      <button id="break-decrement">break decrement</button>
      <p id="break-length" className="length">5</p>
      <button id="break-increment">break increment</button>
    </div>
  )
}

export default BreakLength;