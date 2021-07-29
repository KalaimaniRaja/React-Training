import React, { useState } from "react";

const SearchWiki = () => {
  const [term, SetTerm] = useState("");
  console.log(term);
  return (
    <div>
      <h1>Search Wikipedia example</h1>
      <div className="ui form">
        <div className="field">
          <input
            className="input"
            value={term}
            onChange={e => SetTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchWiki;
