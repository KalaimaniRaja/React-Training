import About from './about.js';
import './App.css';
import JsVariable from './jsVariables';
import CommonDetail from './commonDetail';

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
      <JsVariable />

      <h4>Props and component reusablity</h4>
      <CommonDetail number="1" name="kalai" />

      <CommonDetail number="2" name="mani" />
    </div>
  );
}

export default App;
