import React from 'react'
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const slides = [
    {
      image: "https://whc.unesco.org/uploads/thumbs/news_2326-890-520-20210902172556.jpg", // Replace with actual image URL
      label: "First slide label",
      description: "Some representative placeholder content for the first slide."
    },
    {
      image: "https://whc.unesco.org/uploads/thumbs/news_2326-890-520-20210902172556.jpg", // Replace with actual image URL
      label: "Second slide label",
      description: "Some representative placeholder content for the second slide."
    },
    {
      image: "https://whc.unesco.org/uploads/thumbs/news_2326-890-520-20210902172556.jpg", // Replace with actual image URL
      label: "Third slide label",
      description: "Some representative placeholder content for the third slide."
    }
  ];
const SliderPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    return (
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === activeIndex ? "active" : ""}
              aria-current={index === activeIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
              <img src={slide.image} className="d-block w-100" alt={slide.label} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{slide.label}</h5>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={() => setActiveIndex((activeIndex - 1 + slides.length) % slides.length)}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={() => setActiveIndex((activeIndex + 1) % slides.length)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
  

export default SliderPage