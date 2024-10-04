import React from 'react';
import './CareerPage.css';

const CareerPage = () => {
return (
<div className="career-page">
     <div className="job-list"></div>
     <div className="image-container">
       <img src={process.env.PUBLIC_URL + '/about.png'} alt="Cover" className="cover-image" max-width="1200" width= "1500px" height="450"/>
       <div className="text-overlay">
       <h1>Career Opportunities</h1>
       <p className='centered'>Our company values the unique strengths each individual brings to the team...</p>
       </div>
    </div>
 </div>
    );
};

export default CareerPage;