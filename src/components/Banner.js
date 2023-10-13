import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
  const images = [
    { url: "/clean-technologies", src: "./banner1.png" },
    { url: "/startup-trends", src: "./banner2.png" },
    { url: "/what-the-frontrunners-say", src: "./banner3.png" },
    { url: "/net-zero-and-carbon-neutral", src: "./banner4.png" },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container">
      {images.map((image, index) => (
        <div
          className={`banner-image ${index === currentImageIndex ? "active" : ""}`}
          key={index}
        >
          <a
            href={image.url} // Use the correct URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{ cursor: "pointer" }}
              src={image.src}
              alt={`Image ${index + 1}`}
              className="banner-img"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Banner;
