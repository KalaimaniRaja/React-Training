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
// import Route from "./components/route";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ReduxExample from "./Redux/ReduxExample";
import ReduxClassExample from "./Redux/ReduxClassExample";
import Header from "./components/Header";
import Wizard from "./ReduxForm/wizard";

import StreamCreate from './components/streams/streamcreate';
import StreamDelete from './components/streams/streamdelete';
import StreamEdit from './components/streams/streamedit';
import StreamList from './components/streams/streamlist';
import StreamShow from './components/streams/streamshow';
import history from './history';

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
    <Router history={history}>
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

      <Wizard />

      <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/show/:id" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
}

export default App;
