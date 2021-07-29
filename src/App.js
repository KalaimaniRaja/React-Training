import About from "./about.js";
import "./App.css";
import JsVariable from "./jsVariables";
import CommonDetail from "./commonDetail";
import State from "./state";
import LifeCycle from "./lifecycle";
import FormSearchList from "./formsEvents/formSearchList";
import PasswordValidator from "./formsEvents/validator";
import UserList from "./formsEvents/userList";
import Accordion from './components/accordion';
import Counter from './components/counter';
import SearchWiki from "./components/searchWiki.js";
import UseEffectExample from "./components/useEffect";

function getTime() {
  return new Date().toLocaleTimeString();
}

const AccordionItems = [
  {
    title: 'what is react ?',
    content: 'React is a frontend js framework'
  },
  {
    title: 'why use react ?',
    content: 'React is a favourite js library'
  },
  {
    title: 'how do we use react ?',
    content: 'Can use React by creating components'
  }
]

function App() {
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
  });
  return (
    <div className="App">
      <About />
      <header className="App-header">
        <p>Current Time : {getTime()}</p>
      </header>
      <JsVariable />

      <h4>Props and component reusablity</h4>
      <CommonDetail number="1" name="kalai" />

      <CommonDetail number="2" name="mani" />

      <h4>State</h4>
      <State />

      <br />
      <hr />
      <LifeCycle />

      <br />
      <hr />
      <FormSearchList />

      <br />
      <br />
      <hr />
      <PasswordValidator />

      <br />
      <br />
      <hr />
      <UserList />

      <br />
      <br />
      <hr />
      <Accordion AccordionItems={AccordionItems} />      
      <br />
      <br />

      <br />
      <br />
      <hr />
      <Counter />      
      <br />
      <br />

      
      <br />
      <br />
      <hr />
      <SearchWiki />      
      <br />
      <br />

      <br />
      <br />
      <hr />
      <UseEffectExample />      
      <br />
      <br />      
    </div>
  );
}

export default App;
