import React from "react";

import "./cregister.css";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custombutton/CustomButton";

class Cregister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      cpassword: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "", cpassword: "" });
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="register">
        <h2>REGISTER</h2>
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
          <label for="password">Create Password</label>
          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            id="password"
            value={this.state.password}
            required
          />
          <label for="cpassword">Confirm Password</label>
          <FormInput
            handleChange={this.handleChange}
            name="cpassword"
            type="password"
            id="cpassword"
            value={this.state.cpassword}
            required
          />

          <CustomButton type="submit">REGISTER</CustomButton>
        </form>
      </div>
    );
  }
}
export default Cregister;
