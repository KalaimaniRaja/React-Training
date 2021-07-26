import About from './about.js';
import './App.css';
import JsVariable from './jsVariables';
import CommonDetail from './commonDetail';
import State from './state';

function getTime() {
  return (new Date()).toLocaleTimeString()
}

function App() {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
  });
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

      <h4>State</h4>
      <State />
    </div>
  );
}

export default App;
