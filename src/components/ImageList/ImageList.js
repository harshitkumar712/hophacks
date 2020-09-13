import React from "react";
import ImageItem from "../ImageItem/ImageItem";
import "./imagelist.css";

import images1 from "../../assets/image1.png";
import images2 from "../../assets/image2.png";
import images3 from "../../assets/image3.png";
import images4 from "../../assets/image4.png";
import images5 from "../../assets/image5.png";
import images6 from "../../assets/image6.png";
import images7 from "../../assets/image7.png";
import images8 from "../../assets/image8.png";
class ImageList extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          imageUrl: images1,
        },
        { id: 2, imageUrl: images2 },
        { id: 3, imageUrl: images3 },
        { id: 4, imageUrl: images4 },
        { id: 5, imageUrl: images5 },
        { id: 6, imageUrl: images6 },
        { id: 7, imageUrl: images7 },
        { id: 8, imageUrl: images8 },
      ],
    };
  }

  render() {
    return (
      <div className="imagelist">
        {this.state.sections.map(({ imageUrl, id }) => (
          <ImageItem key={id} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}
export default ImageList;
