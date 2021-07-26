import React from "react";

const buttonText = 'click me';

class JsVariable extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {buttonText}
      </div>
    );
  }
}

export default JsVariable;
