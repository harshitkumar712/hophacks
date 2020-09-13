import React from "react";

import "./csignin.css";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custombutton/CustomButton";

class Csignin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>SIGN IN </h2>
        <form onSubmit={this.handleSubmit}>
          <label for="email">Email-id</label>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            id="email"
            type="email"
            value={this.state.email}
            required
          />
          <label for="password">Password</label>
          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            id="password"
            value={this.state.password}
            required
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
export default Csignin;
