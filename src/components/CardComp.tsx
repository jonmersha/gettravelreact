import React, { useState } from 'react';
import './Card.css';  // Import the CSS file


const CardComp = () => {
    const cardsData = [
        { image: 'image1.jpg', title: 'Title 1', description: 'Description for the first card goes here.' },
        { image: 'image2.jpg', title: 'Title 2', description: 'Description for the second card goes here.' },
        { image: 'image3.jpg', title: 'Title 3', description: 'Description for the third card goes here.' },
        { image: 'image4.jpg', title: 'Title 4', description: 'Description for the fourth card goes here.' },
        { image: 'image5.jpg', title: 'Title 5', description: 'Description for the fifth card goes here.' },
        { image: 'image6.jpg', title: 'Title 6', description: 'Description for the sixth card goes here.' },
        { image: 'image7.jpg', title: 'Title 7', description: 'Description for the seventh card goes here.' },
        { image: 'image8.jpg', title: 'Title 8', description: 'Description for the eighth card goes here.' }
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const cardsPerView = 3;  // Number of cards shown at a time
    
      // Handle previous and next button click
      const handleNext = () => {
        if (currentIndex + cardsPerView < cardsData.length) {
          setCurrentIndex(currentIndex + 1);
        }
      };
    
      const handlePrev = () => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      };
    
      return (
        <div className="page-container">
          <h1 className="page-title">Card Gallery</h1>
          <div className="nav-buttons">
            <button onClick={handlePrev} className="nav-button">Prev</button>
            <button onClick={handleNext} className="nav-button">Next</button>
          </div>
          <div className="card-container">
            <div className="cards-wrapper">
              {cardsData.slice(currentIndex, currentIndex + cardsPerView).map((card, index) => (
                <div className="card" key={index}>
                  <img src={card.image} alt={`Image ${index + 1}`} className="card-image" />
                  <div className="card-content">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
};

export default CardComp;