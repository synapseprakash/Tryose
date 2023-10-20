import React from "react";
import image1 from "./Assests/image1.png";
import image2 from "./Assests/image2.png";
import image3 from "./Assests/image3.png";
import "./Footer.css";

const NewSectionfooter = () => {
  return (
    <section className="new-section">
      <div className="left-side">      
        <div className="image-container">
        <img src={image2} alt="Img2" className="left-image-2" />    
          <img src={image1} alt="Img1" className="left-image-1" />      
          <img src={image3} alt="Img3" className="left-image-3" />
        </div>        
      </div>
      <div className="right-side">
        <h1 className="right-heading-1">New collection </h1>
        <h1 className="right-heading-2">New streetwear outfits</h1>
        <button className="right-button">Show More</button>        
      </div>      
    </section>
  );
};

export default NewSectionfooter;
