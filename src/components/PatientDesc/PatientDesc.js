import React from "react";
import "./patientdesc.css";
import { Link } from "react-router-dom";

const PatientDesc = () => {
  return (
    <div class="patient-desc">
      <div>
        <h1 className="desc-heading">DETAILS</h1>
      </div>
      <div>
        <label for="treatment">Treatment details</label>
      </div>

      <div>
        <textarea id="treatment" name="story" rows="5" cols="33"></textarea>
      </div>
      <div>
        <label for="cost">Cost Details</label>
      </div>

      <div>
        <textarea id="cost" name="story" rows="1" cols="33"></textarea>
      </div>
      <Link
        to="./category-description-patient/submit"
        className="submit-button"
      >
        SUBMIT
      </Link>
    </div>
  );
};

export default PatientDesc;
