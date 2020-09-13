import React from "react";
import ImageItem from "../ImageItem/ImageItem";
import "./imagelist.css";

class ImageList extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        { id: 1, imageUrl: "https://source.unsplash.com/random" },
        { id: 2, imageUrl: "https://source.unsplash.com/random" },
        { id: 3, imageUrl: "https://source.unsplash.com/random" },
        { id: 4, imageUrl: "https://source.unsplash.com/random" },
        { id: 5, imageUrl: "https://source.unsplash.com/random" },
        { id: 6, imageUrl: "https://source.unsplash.com/random" },
        { id: 7, imageUrl: "https://source.unsplash.com/random" },
        { id: 8, imageUrl: "https://source.unsplash.com/random" },
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
