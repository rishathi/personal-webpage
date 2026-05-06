import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MyWork.css';

const MyWork = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="page-title">My Work</h1>
      
      <div className="button-container">
        {/* Web Development Image Button */}
        <a href="https://github.com/rishathi" target="_blank" rel="noopener noreferrer">
          <div className="image-button">
            <img 
              src="/programming_img.jpg" 
              alt="Web Development" 
              className="image-btn" 
            />
            <div className="image-overlay"></div>
            <h2 className="image-title">Web Development</h2>
          </div>
        </a>
        {/* Art Portfolio Image Button */}
        {/* <div className="image-button" onClick={() => navigate('/art-portfolio')}>
          <img 
            src="/art_img/IMG_2488.jpeg" 
            alt="Art Portfolio" 
            className="image-btn" 
          />
          <div className="image-overlay"></div>
          <h2 className="image-title">Art Portfolio</h2>
        </div> */}

        {/* GDSN Portfolio Image Button */}
        <div className="image-button" onClick={() => navigate('/gdsn-portfolio')}>
          <img 
            src="/gdsn_img/brand_identity_citrus_squad/product-lemon-front.jpg" 
            alt="GDSN Portfolio" 
            className="image-btn" 
          />
          <div className="image-overlay"></div>
          <h2 className="image-title">GDSN Portfolio</h2>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
