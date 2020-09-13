import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import "./header.css";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo" to="/">
        Distcare
      </Link>
      <div className="options">
        {/* <Link className="option" to="./signin">
          SIGN IN
        </Link> */}
        <Link className="option" to="./register">
          REGISTER
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
