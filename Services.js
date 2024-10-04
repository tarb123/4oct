import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import react icons
import './Services.css'; // Your custom CSS for styling the container and logos

const clientLogos = [
  { id: 1, logo: `${process.env.PUBLIC_URL}/clients/(1)OLP.jpg` },
  { id: 2, logo: `${process.env.PUBLIC_URL}/clients/(2)The Deli.png` },
  { id: 3, logo: `${process.env.PUBLIC_URL}/clients/(3)Risk Associates.png` },
  { id: 4, logo: `${process.env.PUBLIC_URL}/clients/(4)Oil Industries Pakistan Pvt Ltd. (Target).jpg` },
  { id: 5, logo: `${process.env.PUBLIC_URL}/clients/(5)HamdardUni.png` },
  { id: 6, logo: `${process.env.PUBLIC_URL}/clients/(6)Pulse consultant.png` },
  { id: 7, logo: `${process.env.PUBLIC_URL}/clients/(7)Gatronova.jpg` },
  { id: 8, logo: `${process.env.PUBLIC_URL}/clients/(8)BDO.png`},
  { id: 9, logo: `${process.env.PUBLIC_URL}/clients/(9)OMEX.jpg` },
  { id: 10, logo: `${process.env.PUBLIC_URL}/clients/(10)Pak Poly Industries (Pvt). Ltd.jpg` },
  { id: 11, logo: `${process.env.PUBLIC_URL}/clients/(11)Lakhani Glass (Pvt) Ltd.png` },
  { id: 12, logo: `${process.env.PUBLIC_URL}/clients/(12)Morango-Net.png` },
  { id: 13, logo: `${process.env.PUBLIC_URL}/clients/(13)LUCKY TEXTILE MILLS.jpg` },
  { id: 14, logo: `${process.env.PUBLIC_URL}/clients/(14)NELSON.png` },
  { id: 15, logo: `${process.env.PUBLIC_URL}/clients/(15)MEDICARE.png` },
  { id: 16, logo: `${process.env.PUBLIC_URL}/clients/(16)Dehlawi Optical industries.png` },
  { id: 17, logo: `${process.env.PUBLIC_URL}/clients/(17)RH-CPAs.webp` },
  { id: 18, logo: `${process.env.PUBLIC_URL}/clients/(18)CHASE UP.jpg` },
  { id: 19, logo: `${process.env.PUBLIC_URL}/clients/(19)SSGC-LPG.jpg` },
  { id: 20, logo: `${process.env.PUBLIC_URL}/clients/(20)BAITHAK SCHOOL NETWORK.png` },
  { id: 21, logo: `${process.env.PUBLIC_URL}/clients/(21)Pak Petrochemical Industries Pvt. Ltd..png` },
  { id: 22, logo: `${process.env.PUBLIC_URL}/clients/(22)AXIOM.png` },
  { id: 23, logo: `${process.env.PUBLIC_URL}/clients/(23)Expertise Company Ltd.png` },
  { id: 24, logo: `${process.env.PUBLIC_URL}/clients/(24)Grant Thornton.jpg`},
  { id: 25, logo: `${process.env.PUBLIC_URL}/clients/(25)Tech Links.jpg` },
  { id: 26, logo: `${process.env.PUBLIC_URL}/clients/(26)Krystalite Products Pvt. Ltd.jpg` },
  { id: 27, logo: `${process.env.PUBLIC_URL}/clients/(27)INVENTEL TV.png` },
  { id: 28, logo: `${process.env.PUBLIC_URL}/clients/(28)INNOVATIVE SOLUTION.png` },
  { id: 29, logo: `${process.env.PUBLIC_URL}/clients/(29)RAVI.png` }
  
];

// Custom Arrow Components
const PreviousArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-prev" onClick={onClick}>
      <FaArrowLeft className="slider-arrow" />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-next" onClick={onClick}>
      <FaArrowRight className="slider-arrow" />
    </div>
  );
};

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7, // Number of logos to show at a time
    slidesToScroll: 1, // Number of logos to scroll per click
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 2000, // Time between auto scrolls
    prevArrow: <PreviousArrow />, // Use custom Previous Arrow
    nextArrow: <NextArrow />, // Use custom Next Arrow
  };

  return (
    <div className="services-container">
      <h1>Our Clients</h1>
      <p>Trusted global HR management & consulting services.</p>
      <Slider {...settings}>
        {clientLogos.map((client) => (
          <div key={client.id} className="client-logo">
            <img src={client.logo} alt={`Client ${client.id}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;

 