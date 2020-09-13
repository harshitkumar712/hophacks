import React from "react";
import CATEGORY_DATA from "../categorydata/CategoryData";
import "./cdonor.css";
import { Link } from "react-router-dom";

class Cdonor extends React.Component {
  constructor() {
    super();

    this.state = {
      data: CATEGORY_DATA,
    };
  }
  //   handleClick = (e) => {
  //     console.log(this.state.data.heading);
  //   };
  render() {
    return (
      <div className="category-donor">
        <h2 className="category-header">Select Categories </h2>
        {this.state.data.map((data) => {
          return (
            // <div
            //   onClick={this.handleClick}
            //   className="donor-item"
            //   key={data.id}
            // >
            //   {data.title}
            // </div>
            <Link
              to="./category-donor/category-description-donor"
              onClick={this.handleClick}
              className="donor-item"
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
export default Cdonor;
