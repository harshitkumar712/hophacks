import React from "react";

import { Link } from "react-router-dom";

import "./homebutton.css";

const HomeButton = () => {
  return (
    <div className="b-container">
      <div>
        <Link className="button" to="./donate">
          DONATE
        </Link>
      </div>
      <div>
        <Link className="button" to="./volunteer">
          VOLUNTEER
        </Link>
      </div>
      <div>
        <Link className="button" to="./patient">
          PATIENT
        </Link>
      </div>
    </div>
  );
};

export default HomeButton;
