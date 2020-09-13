import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo" to="/">
        Distcare
      </Link>
      <div className="options">
        <Link className="option" to="./signin">
          SIGN IN
        </Link>
        <Link className="option" to="./register">
          REGISTER
        </Link>
      </div>
    </div>
  );
};

export default Header;
