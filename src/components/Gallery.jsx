import React from "react";

const Gallery = ({ photos }) => {
  return (
    <div className="gallery">
      {photos.map((photo, index) => {
        return (
          <div className="gallery-img" key={index}>
            <img src={photo.imgSrc} alt={photo.alt} key={index} />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
