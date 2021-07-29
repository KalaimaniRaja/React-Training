import React, { useState, useEffect } from "react";

function UseEffectExample() {
  const [value, setValue] = useState("a");
  const [value2, setValue2] = useState("b");

  useEffect(() => {
    console.log(value, value2);
  },[value,value2]);

  const handleSetValue = (e) => {
    setValue(e.target.value)
  }

  const handleSetValue2 = (e) => {
    setValue2(e.target.value)
  }

  return (
    <React.Fragment>
      <h1>useEffect example</h1>
      <div className="ui form">
        <div className="field">
          <input type="text" className="field" value={value} onChange={handleSetValue} />
        </div>
        <div className="field">
          <input type="text" className="field" value={value2} onChange={handleSetValue2} />
        </div>
      </div>
      <br/>
      <p>Value of input 1 is : {value}</p>
      <p>Value of input 2 is : {value2}</p>
    </React.Fragment>
  );
}

export default UseEffectExample;
