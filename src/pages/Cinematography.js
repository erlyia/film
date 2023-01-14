import '../main.css';

import React, { useState } from "react";

import image1 from '../assets/shots/still-2023-01-10-15h00m04s408.png';
import image2 from '../assets/shots/still-2023-01-10-15h03m59s058.png';
import image3 from '../assets/shots/still-2023-01-10-15h05m44s348.png';
import image4 from '../assets/shots/still-2023-01-10-15h06m23s897.png';
import image5 from '../assets/shots/still-2023-01-10-15h07m40s829.png';
import image6 from '../assets/shots/still-2023-01-10-15h08m00s253.png';
import image7 from '../assets/shots/still-2023-01-10-15h10m42s029.png';
import image8 from '../assets/shots/still-2023-01-10-15h11m56s676.png';
import image9 from '../assets/shots/still-2023-01-10-15h12m37s420.png';
import image10 from '../assets/shots/still-2023-01-10-15h13m49s867.png';
import image11 from '../assets/shots/still-2023-01-10-15h14m46s453.png';
import image12 from '../assets/shots/still-2023-01-10-15h13m20s846.png';
import image13 from '../assets/shots/still-2023-01-10-15h18m23s697.png';
import image14 from '../assets/shots/still-2023-01-10-15h19m33s940.png';
import image15 from '../assets/shots/still-2023-01-10-15h22m05s348.png';
import image16 from '../assets/shots/still-2023-01-10-15h23m10s363.png';
import image17 from '../assets/shots/still-2023-01-10-15h24m52s555.png';
import image18 from '../assets/shots/still-2023-01-10-15h26m47s675.png';
import image19 from '../assets/shots/still-2023-01-10-15h31m37s243.png';
import image20 from '../assets/shots/still-2023-01-13-19h15m32s736.png';
import image21 from '../assets/shots/still-2023-01-13-19h18m24s016.png';


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21];



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
      <div className="photos">{imageCards}</div>
      
      {
        lightboxDisplay ? 
        <div id="lightbox" onClick={hideLightBox}>
          <button onClick={showPrev}>⭠</button>
          <div className="vertical-container">
          <img id="lightbox-img" src={imageToShow} alt='img'></img>
          </div>
          <button onClick={showNext}>⭢</button>
        </div>
       : ""
      }
    </>
  );
}

export default Cinematography;