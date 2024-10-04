import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import About from '../components/About';

import ButtonSection from '../components/ButtonSection';  
import SimpleCarousel from './SimpleCarousel';
import CareerPage from './HR/CareerPage';
import HROverview from './HR/HROverview';
import StrengthPage from './HR/StrengthPage';
import './HomePage.css'; 
import Services from './Services';

   
const HomePage = () => {
 
return (
 
<div className="site-header">
 
<ButtonSection/>
<StrengthPage/>
<Services/>
<CareerPage/>
<HROverview/>

 
<SimpleCarousel/>
 
</div>
  );};

export default HomePage;


// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import './HomePage.css'; 

// const HomePage = () => {
// return (
// <div>
// <header className="site-header">
// {/* <img src="https://conductivity.com.pk/wp-content/uploads/2022/04/Capture.png" alt="Logo" className="mx-auto mt-2"/> */}
//   <Carousel 
//   autoPlay interval={1000} infiniteLoop showThumbs={true} showStatus={false} showArrows={false}
//   >
// <div className="slide"><img src="C1.jpeg" alt= "1" /></div>
// <div className="slide"><img src="C2.jpeg" alt = "2"/></div>
// <div className="slide"><img src="C4.jpeg" alt = "4" /></div>
// <div className="slide"><img src="C5.jpeg" alt = "5" /></div>
// <div className="slide"><img src="C6.jpeg" alt = "6" /></div>
// <div className="slide"><img src="C7.jpeg" alt = "7" /></div>
// <div className="slide"><img src="C8.jpeg" alt = "8" /></div>
// <div className="slide"><img src="C9.jpeg" alt = "9" /></div>
// <div className="slide"><img src="C14.jpeg" alt = "14" /></div>
// <div className="slide"><img src="C15.jpeg" alt = "15" /></div>
// <div className="slide"><img src="C16.jpeg" alt = "16" /></div>
// <div className="slide"><img src="C17.jpeg" alt = "17" /></div>
// <div className="slide"><img src="C18.jpeg" alt = "18" /></div>
// <div className="slide"><img src="C3.jpeg" alt = "3" /></div>
// <div className="slide"><img src="C10.jpeg" alt = "10" /></div>
// <div className="slide"><img src="C11.jpeg" alt = "12" /></div>
// <div className="slide"><img src="C13.jpeg" alt = "13" /></div>
// </Carousel>      

// </header>
// </div>

//   );
// };

// export default HomePage; 


/* <div className="video-container">
<video className="rounded-video" src="/Cσnductivity.mp4" // Path relative to the public folder
      type="video/mp4" autoPlay loop muted
> Your browser does not support the video tag.
</video>
</div> */