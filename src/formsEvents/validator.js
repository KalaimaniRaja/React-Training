import React from "react";

class PasswordValidator extends React.Component {
  state = {
    password: ""
  };

  render() {
    return (
      <div className="ui segment">
        <h4>password length validator</h4>
        <form className="ui form">
          <div className="field">
            <input
              type="password"
              value={this.state.password}
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
            />

            {this.state.password.length < 4
              ? "Password must be atleast 4 characters"
              : ""}
          </div>
        </form>
      </div>
    );
  }
}

export default PasswordValidator;
