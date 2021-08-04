import About from "./about.js";
import "./App.css";
import JsVariable from "./jsVariables";
import CommonDetail from "./commonDetail";
import State from "./state";
import LifeCycle from "./lifecycle";
import FormSearchList from "./formsEvents/formSearchList";
import PasswordValidator from "./formsEvents/validator";
import UserList from "./formsEvents/userList";
import Accordion from "./components/accordion";
import Counter from "./components/counter";
import SearchWiki from "./components/searchWiki.js";
import UseEffectExample from "./components/useEffect";
import Route from "./components/route";
import ReduxExample from "./Redux/ReduxExample";
import ReduxClassExample from "./Redux/ReduxClassExample";
import Header from "./components/Header";

function getTime() {
  return new Date().toLocaleTimeString();
}

const AccordionItems = [
  {
    title: "what is react ?",
    content: "React is a frontend js framework",
  },
  {
    title: "why use react ?",
    content: "React is a favourite js library",
  },
  {
    title: "how do we use react ?",
    content: "Can use React by creating components",
  },
];

function App() {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
  });
  return (
    <div className="App">
      <Header />

      <br />
      <br />
      <hr />
      <Route path="/">
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
      </Route>

      <Route path="/counter">
        <br />
        <br />
        <hr />
        <Counter />
        <br />
        <br />
      </Route>

      <Route path="/search">
        <br />
        <br />
        <hr />
        <SearchWiki />
        <br />
        <br />
      </Route>

      <br />
      <br />
      <hr />
      <UseEffectExample />
      <br />
      <br />

      <Route path="/accordion">
        <br />
        <br />
        <hr />
        <Accordion AccordionItems={AccordionItems} />
        <br />
        <br />
      </Route>

      <br />
      <br />
      <hr />
      <ReduxExample />
      <br />
      <br />

      <br />
      <br />
      <hr />
      <ReduxClassExample />
      <br />
      <br />
    </div>
  );
}

export default App;
