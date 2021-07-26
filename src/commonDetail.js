import React from "react";

class CommonDetail extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p>props {this.props.number} {this.props.name}</p>
      </div>
    );
  }
}

export default CommonDetail;
