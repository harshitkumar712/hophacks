import React from "react";
import CATEGORY_DATA from "../categorydata/CategoryData";
import "./Cpatient.css";

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
          <h2 className="category-header">SELECT CATEGORIES </h2>
        </div>
        {this.state.data.map((data) => {
          return (
            <div className="patient-item" key={data.id}>
              {data.title}
            </div>
          );
        })}
      </div>
    );
  }
}
export default Cpatient;
