import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Action1Function,
  Action2Function,
  EnableActionFunction,
  DisableActionFunction,
} from "../index";

const ReduxExample = () => {
  const selectedReduxAction = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <h1>Redux Example</h1>
      {selectedReduxAction.txt}
      <br />
      <button
        onClick={() => dispatch(Action1Function())}
        disabled={!selectedReduxAction.setAction}
      >
        Action 1
      </button>
      &nbsp;
      <button
        onClick={() => dispatch(Action2Function())}
        disabled={!selectedReduxAction.setAction}
      >
        Action 2
      </button>
      &nbsp;
      <button
        onClick={() => dispatch(EnableActionFunction())}
        disabled={selectedReduxAction.setAction}
      >
        Enable Action Functions
      </button>
      &nbsp;
      <button
        onClick={() => dispatch(DisableActionFunction())}
        disabled={!selectedReduxAction.setAction}
      >
        Disable Action Functions
      </button>
    </React.Fragment>
  );
};

export default ReduxExample;
