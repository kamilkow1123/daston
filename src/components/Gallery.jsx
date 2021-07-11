import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Gallery = ({ photos }) => {
  const [ lightbox, setLightbox ] = useState(false);
  const [ tempImgSrc, setTempImgSrc ] = useState("");
  const getImage = imgSrc => {
    setTempImgSrc(imgSrc);
    setLightbox(true);
  };

  return (
    <div>
      <div className={lightbox ? "lightbox open" : "lightbox"}>
        <img src={tempImgSrc} />
        <div className="close-icon" onClick={() => setLightbox(false)}>
          <FaTimes />
        </div>
      </div>

      <div className="gallery">
        {photos.map((photo, index) => {
          return (
            <div
              className="gallery-img"
              key={index}
              onClick={() => getImage(photo.imgSrc)}
            >
              <img src={photo.imgSrc} alt={photo.alt} key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
