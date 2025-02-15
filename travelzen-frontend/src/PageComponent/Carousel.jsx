
import React, { useEffect, useRef } from "react";
import carousel1 from "../images/Home.jpg";
import carousel2 from "../images/home2.jpg";
import carousel3 from "../images/home3.jpg";
import  carousel4  from "../images/home4.jpg";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min";

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      const carousel = new window.bootstrap.Carousel(carouselRef.current, {
        interval: 6000, 
        ride: "carousel", 
        pause: "hover", 
        wrap: true, 
      });
    }
  }, []);

  return (
    <div
      ref={carouselRef}
      id="carouselExampleCaptions"
      className="carousel slide w-full max-w-screen-lg mx-auto overflow-hidden rounded-lg shadow-lg"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel Inner */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carousel1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={carousel2} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={carousel3} className="d-block w-100" alt="Slide 3" />
        </div>
      </div>

      {/* Left & Right Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;

