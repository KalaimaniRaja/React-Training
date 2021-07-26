import React from "react";

class State extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      val : "test name"
    }
  }

  changeState = () => {
    this.setState({
      val : "john"
    });

    console.log(this.state.val)
  }

  render() {
    return <div>
<p>
        {this.state.val}
</p>
      <button onClick={this.changeState}>
        change state
      </button>
    </div>;
  }
}

export default State;
