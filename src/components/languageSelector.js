import React from "react";
import LanguageContext from "../contexts/languageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        Select a language:
        <ul>
          <li>
            <i
              className="flag us"
              onClick={() => this.context.onLanguageChange("english")}
            />
          </li>
          <li>
            <i
              className="flag nl"
              onClick={() => this.context.onLanguageChange("dutch")}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default LanguageSelector;
