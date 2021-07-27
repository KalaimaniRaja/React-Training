import React from "react";

class SearchBar extends React.Component {
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }

  //   onInputClick() {
  //     console.log("Input Clicked");
  //   }

  state = {
    term: ""
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.term)

    this.props.onSubmit(this.state.term)
    
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            {/* <input
              type="text"
              onClick={this.onInputClick}
              onChange={this.onInputChange}
            /> */}

            {/* <input
              type="text"
              onChange={e => {
                console.log(
                  "input inline function checking on change - " + e.target.value
                );
              }}

              style={{marginTop: '10px'}}
            /> */}

            <input
              type="text"
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
