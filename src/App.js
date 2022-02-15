
import './App.css';
import BreakLength from './components/breakLengthComponent/BreakLength';
import SessionLength from './components/sessionLengthComponent/SessionLength';
import Session from './components/sessionComponent/Session';

function App() {
  return (
    <div className="App">
      <BreakLength />
      <SessionLength />
      <Session />
    </div>
  );
}

export default App;
