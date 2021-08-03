import React from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import {
  Action1Function,
  Action2Function,
  EnableActionFunction,
  DisableActionFunction
} from "../index";

class ReduxClassExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const selectedReduxAction = useSelector(state => state);
    // const dispatch = useDispatch();

    return (
      <React.Fragment>
        <h1>Redux Class Example</h1>
        {this.props.txt}
        <br />
        <button
          onClick={() => this.props.Action_1()}
          disabled={!this.props.setAction}
        >
          Action 1
        </button>
        &nbsp;
        <button
          onClick={() => this.props.Action_2()}
          disabled={!this.props.setAction}
        >
          Action 2
        </button>
        &nbsp;
        <button
          onClick={() => this.props.EnableAction()}
          disabled={this.props.setAction}
        >
          Enable Action Functions
        </button>
        &nbsp;
        <button
          onClick={() => this.props.DisableAction()}
          disabled={!this.props.setAction}
        >
          Disable Action Functions
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    Action_1: () => dispatch(Action1Function()),
    Action_2: () => dispatch(Action2Function()),
    EnableAction: () => dispatch(EnableActionFunction()),
    DisableAction: () => dispatch(DisableActionFunction())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ReduxClassExample);
