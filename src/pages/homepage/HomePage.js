import React from "react";
import "./homepage.css";
import HomeButton from "../../components/HomeButton/HomeButton";

import ImageList from "../../components/ImageList/ImageList";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homebutton">
        <HomeButton />
      </div>
      <ImageList />
    </div>
  );
};

export default HomePage;
