import '../main.css';

import React, { useState } from "react";

const images = ["https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg", "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg"];


function Cinematography() {
    return (
        <div className="container">
            <div className="vertical-container">
                <div id="quote">
                    <div className="text-center">
                        <em>Shot on a Sony A7SII + Sigma 24-70mm Art Lens</em>
                    </div>
                </div>
                <div className="gallery">
                    <ImageGallery/>
                </div>
            </div>
        </div>
    )
}

function ImageGallery() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  
  //looping through our images array to create img elements
  const imageCards = images.map((image) => (
    <img className="image-card" onClick={() => showImage(image)} src={image} alt='test'/>
  ));

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };
  

  return (
    <>
      <div>{imageCards}</div>
      
      {
        lightboxDisplay ? 
        <div id="lightbox" onClick={hideLightBox}>
          <button onClick={showPrev}>⭠</button>
          <div className="vertical-container">
          <img id="lightbox-img" src={imageToShow} alt='img'></img>
          caption
          </div>
          <button onClick={showNext}>⭢</button>
        </div>
       : ""
      }
    </>
  );
}

export default Cinematography;