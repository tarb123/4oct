import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import './SimpleCarousel.css'; // Your custom CSS file for additional styling

const SimpleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image index
  const sliderRef = useRef(null); // Reference to the slider

  const images = [
    "C1.jpeg", "C2.jpeg", "C3.jpeg", "C4.jpeg", "C5.jpeg",
    "C6.jpeg", "C7.jpeg", "C8.jpeg", "C9.jpeg", "C10.jpeg",
    "C11.jpeg", "C12.jpeg", "C13.jpeg"
  ];

  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentIndex(next), // Update currentIndex on slide change
  };

  // Custom navigation functions
  const goToNext = () => {
    sliderRef.current.slickNext(); // Go to next slide
  };

  const goToPrevious = () => {
    sliderRef.current.slickPrev(); // Go to previous slide
  };

  // Function to handle thumbnail click
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index); // Update current index to the clicked thumbnail
    sliderRef.current.slickGoTo(index); // Navigate to the clicked thumbnail's corresponding slide
  };

  const getThumbnailIndices = () => {
    if (images.length <= 3) return [0, 1, 2].slice(0, images.length);
    if (currentIndex === 0) return [0, 1, 2];
    if (currentIndex === images.length - 1) return [images.length - 3, images.length - 2, images.length - 1];
    return [currentIndex - 1, currentIndex, currentIndex + 1];
  };

  const thumbnailIndices = getThumbnailIndices();

  // Set up auto-slide functionality with 2-second interval
  useEffect(() => {
    const timer = setInterval(goToNext, 2000); // Change slide every 2 seconds
    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="carousel-container">
      <div className="main-slider">
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, index) => (
            <div key={index} className="slide-container">
              <img src={img} alt={`Slide ${index}`} className="main-image" />
            </div>
          ))}
        </Slider>

        {/* Thumbnails inside the slider, displayed horizontally */}
        <div className="thumbnail-overlay">
          {thumbnailIndices.map((index) => (
            <div
              key={index}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`} // Highlight the active thumbnail
              onClick={() => handleThumbnailClick(index)} // Click on thumbnail to navigate
            >
              <img src={images[index]} alt={`Thumbnail ${index}`} className="thumbnail-image" />
            </div>
          ))}
        </div>

        {/* Custom navigation buttons with icons */}
        <button className="nav-button prev-button" onClick={goToPrevious}>
          <i className="fas fa-chevron-left"></i> {/* Font Awesome icon for left arrow */}
        </button>
        <button className="nav-button next-button" onClick={goToNext}>
          <i className="fas fa-chevron-right"></i> {/* Font Awesome icon for right arrow */}
        </button>
      </div>
    </div>
  );
};

export default SimpleCarousel;

 
// Remove Thumbnail Section: The thumbnail-overlay and related logic have been removed.
// This should give you a clean slider without the thumbnail image boxes

// import React, { useRef } from 'react';
// import Slider from 'react-slick';
// import './SimpleCarousel.css'; // Your custom CSS file for additional styling

// const SimpleCarousel = () => {
//   const sliderRef = useRef(null); // Reference to the slider

//   const images = [
//     "C1.jpeg", "C2.jpeg", "C3.jpeg", "C4.jpeg", "C5.jpeg",
//     "C6.jpeg", "C7.jpeg", "C8.jpeg", "C9.jpeg", "C10.jpeg",
//     "C11.jpeg", "C12.jpeg", "C13.jpeg"
//   ];

//   // Slick slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   // Custom navigation functions
//   const goToNext = () => {
//     sliderRef.current.slickNext(); // Go to next slide
//   };

//   const goToPrevious = () => {
//     sliderRef.current.slickPrev(); // Go to previous slide
//   };

//   return (
//     <div className="carousel-container">
//       <div className="main-slider">
//         <Slider ref={sliderRef} {...settings}>
//           {images.map((img, index) => (
//             <div key={index} className="slide-container">
//               <img src={img} alt={`Slide ${index}`} className="main-image" />
//             </div>
//           ))}
//         </Slider>

//         {/* Custom navigation buttons with icons */}
//         <button className="nav-button prev-button" onClick={goToPrevious}>
//           <i className="fas fa-chevron-left"></i> {/* Font Awesome icon for left arrow */}
//         </button>
//         <button className="nav-button next-button" onClick={goToNext}>
//           <i className="fas fa-chevron-right"></i> {/* Font Awesome icon for right arrow */}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SimpleCarousel;
