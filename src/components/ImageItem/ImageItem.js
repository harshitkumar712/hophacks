import React from "react";
import "./imageitem.css";

const ImageItem = ({ imageUrl }) => {
  return (
    <div
      className="image-item"
      style={{
        backgroundImage: "url(" + imageUrl + ")",
        backgroundRepeat: "no-repeat",

        width: 300,
        height: 300,
      }}
    >
      <div className="content"></div>
    </div>
  );
};

export default ImageItem;
