import logo from './logo.svg';
import './App.css';
import Cinema from './Components/Cinema';
import { NavBar } from './Components/NavComp/NavBar';
import LayOut from './Components/LayOut';
import StateManager from './State/StateManager';
import Stopwatch from './Components/StopWatch';

function App() {
  return (
    <div className="App">
      <StateManager>
        <LayOut />
      </StateManager>
      <div className="stopWatch"> <Stopwatch /></div>

    </div>
  );
}

export default App;
