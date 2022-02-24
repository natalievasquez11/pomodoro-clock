
import './App.css';
import BreakLength from './components/breakLengthComponent/BreakLength';
import SessionLength from './components/sessionLengthComponent/SessionLength';
import Session from './components/sessionComponent/Session';

function App() {
  const minsSecs = { minutes: 25, seconds: 0 };

  return (
    <div className="App">
      <BreakLength />
      <SessionLength />
      <Session minsSecs={minsSecs}/>
    </div>
  );
}
 
export default App;
