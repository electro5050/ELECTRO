import React, { useState, useEffect } from 'react';
import './BannerSlider.css'; // Create a CSS file for your BannerSlider component styling

const BannerSlider = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const bannerImages = [
    'url1.jpg',
    'url2.jpg',
    'url3.jpg',
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) =>
        prevBanner === bannerImages.length - 1 ? 0 : prevBanner + 1
      );
    }, 3000); // Change the duration (in milliseconds) for automatic switching

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  return (
    <div className="banner-slider">
      <img src={bannerImages[currentBanner]} alt={`Banner ${currentBanner}`} />
    </div>
  );
};

export default BannerSlider;
