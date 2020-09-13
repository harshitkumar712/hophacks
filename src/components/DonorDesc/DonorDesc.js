import React from "react";
import CATEGORY_DATA from "../categorydata/CategoryData";
import "./donordesc.css";
import { Link } from "react-router-dom";

class DonorDesc extends React.Component {
  constructor() {
    super();

    this.state = {
      data: CATEGORY_DATA,
    };
  }
  render() {
    return (
      <div className="category-patient-description">
        {this.state.data
          .filter((data) => data.id === 4)
          .map((data) => {
            return (
              <div className="description-header">
                <div>
                  <h2 className="description-title">{data.heading}</h2>
                </div>
                <div className="description"> {data.description}</div>
              </div>
            );
          })}
        <Link to="./category-description-donor/donate" className="donor-button">
          DONATE
        </Link>
      </div>
    );
  }
}
export default DonorDesc;
