import About from './about.js';
import './App.css';

function getTime() {
  return (new Date()).toLocaleTimeString()
}

function App() {
  return (
    <div className="App">
    <About />
      <header className="App-header">
        <p>
         Current Time : {getTime()}
        </p>
      </header>
    </div>
  );
}

export default App;
