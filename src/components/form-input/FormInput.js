import React from "react";
import "./forminput.css";

const FormInput = ({ handleChange, label, ...otherprops }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherprops} />
      {label ? <label>{label}</label> : null}
    </div>
  );
};

export default FormInput;
