import React from 'react';
import './About.css';
import { AiOutlineRight } from 'react-icons/ai';

const About = () => {
  return (
    <div>
{/* Section with Background Image */}
<section
      className="about-section"
      style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + '/cover_2.webp'})`,
      }}
    >
      <div className="overlay">
        <h1 className="about-heading">About Us</h1>
        <p className="breadcrumb">
          Home 
          <span className="icon">
          <AiOutlineRight />  {/* Using the React Icon for '>' */}
          </span> 
          About Us
        </p>
        <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaon.
        </p>
      </div>
    </section>
 
    </div>
  );
};

export default About;

 