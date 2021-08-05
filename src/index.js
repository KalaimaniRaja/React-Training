import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";

//Selector
const Action_1 = "Action 1 done";
const Action_2 = "Action 2 done";
const EnableAction = "Enable Action";
const DisableAction = "Disable Action";

//Action
export const Action1Function = () => ({ type: Action_1 });
export const Action2Function = () => ({ type: Action_2 });
export const EnableActionFunction = () => ({ type: EnableAction });
export const DisableActionFunction = () => ({ type: DisableAction });

export const initialValue = {
  txt: "",
  setAction: false
};

//Reducer
const ReducerAction = (state = initialValue, actions) => {
  switch (actions.type) {
    case Action_1:
      return {
        ...state,
        txt: "Action 1 is returned successfully"
      };
    case Action_2:
      return {
        ...state,
        txt: "Action 2 is returned successfully"
      };
    case EnableAction:
      return {
        setAction: true,
        txt: "Action is enabled"
      };
    case DisableAction:
      return {
        setAction: false,
        txt: "Action is disabled"
      };
    default:
      return {
        ...state,
        txt: "No action to return. kindly enable action functions"
      };
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Store
let store = createStore(
  ReducerAction,  
  composeEnhancers(applyMiddleware())
  );
// store.subscribe(() => {
//     store.getState()

//     console.log(store.getState())
// });

// store.dispatch(Action1Function())

// store.dispatch(Action2Function())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
