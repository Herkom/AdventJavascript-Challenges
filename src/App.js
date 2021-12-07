import Timer from './Components/Timer';

import logo from './images/logo.svg';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Pomodoro || Advent of JavaScript
        </h1>
      </header>

      <Timer/>
    </div>
  );
}

export default App;
