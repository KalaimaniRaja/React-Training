import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const countIncrement = () => {
    setCount(count + 1);
  };

  const countDecrement = () => {
    setCount(count - 1);
  };

  const countReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>counter example</h1>
      <p>value is : {count}</p>
      <div className="ui grid">
        <div className="five column row">
          <div className="column">
            <button onClick={countIncrement}>increase count</button>
          </div>
          <div className="column">
            <button onClick={countDecrement}>Decrease count</button>
          </div>
          <div className="column">
            <button onClick={countReset}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
