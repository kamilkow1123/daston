import React, { useState } from "react";
import { FaTimes, FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Gallery = ({ photos }) => {
  const [ lightbox, setLightbox ] = useState(false);
  //   const [ tempImgSrc, setTempImgSrc ] = useState("");
  const [ currentImage, setCurrentImage ] = useState(0);
  const length = photos.length;

  const getImage = (imgSrc, index) => {
    setCurrentImage(index);
    // setTempImgSrc(imgSrc);
    setLightbox(true);
  };

  const prevSlide = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };

  const nextSlide = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  return (
    <div>
      <div className={lightbox ? "lightbox open" : "lightbox"}>
        <FaAngleLeft className="left-arrow" onClick={prevSlide} />
        <FaAngleRight className="right-arrow" onClick={nextSlide} />
        <div className="close-icon" onClick={() => setLightbox(false)}>
          <FaTimes />
        </div>
        {photos.map((photo, index) => {
          return (
            <div
              className={index === currentImage ? "slide active" : "slide"}
              key={index}
            >
              {index === currentImage && (
                <img src={photo.imgSrc} alt="lightbox" />
              )}
            </div>
          );
        })}
      </div>

      <div className="gallery">
        {photos.map((photo, index) => {
          return (
            <div
              className="gallery-img"
              key={index}
              onClick={() => getImage(photo.imgSrc, index)}
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
