import React from "react";
import CATEGORY_DATA from "../categorydata/CategoryData";
import "./Cpatient.css";
import { Link } from "react-router-dom";

class Cpatient extends React.Component {
  constructor() {
    super();

    this.state = {
      data: CATEGORY_DATA,
    };
  }
  render() {
    return (
      <div className="category-patient">
        <div>
          <h2 className="category-header">Select Categories </h2>
        </div>
        {this.state.data.map((data) => {
          return (
            <Link
              to="./category-patient/category-description-patient"
              className="patient-item"
              key={data.id}
            >
              {data.title}
            </Link>
          );
        })}
      </div>
    );
  }
}
export default Cpatient;
