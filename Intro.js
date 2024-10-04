import React from 'react';
import './Intro.css';
import { AiOutlineRight } from 'react-icons/ai';

const Intro = () => {
  return (
    <div>
{/* Section with Background Image */}
<section
      className="intro-section"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/intro.jpg'})`,
        height: "1200" }}
>
<div className="intro-overlay">
         
    <div className="buttons">
    <button className="btn one-btn">Start Consultation</button>
    <button className="btn two-btn">Contact Us</button>
    </div>
    
    <h1 className="intro-heading">Becomes The True Hero With Conductivity</h1>
    <p className="breadcrumb">Home 
    <span className="icon">
    <AiOutlineRight />  {/* Using the React Icon for '>' */}
    </span> 
    Conductivity
    </p>
    <p className="intro-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaon.
    </p>
    

    </div>
    
    </section>
    </div>
  );
};

export default Intro;
