import React from "react";
import "./App.css";
import UserCreate from "./components/userCreate";
import colorContext from "./contexts/colorContext";
import LanguageSelector from "./components/languageSelector";
import { LanguageContext } from "./contexts/languageContext";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageContext>
          <LanguageSelector />
          <colorContext.Provider value='blue'>
            <UserCreate />
          </colorContext.Provider>
        </LanguageContext>
      </div>
    );
  }
}

export default App;
