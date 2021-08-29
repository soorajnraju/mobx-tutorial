import logo from './logo.svg';
import './App.css';

import TimerView from "./components/TimerView"
import TimeChanger from "./components/TimeChanger"

function App() {
  return (
    <div className="App">
      <TimeChanger />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         MobX Example
        </p>
        <TimerView />
      </header>
    </div >
  );
}

export default App;
