import React, { useState, useEffect } from 'react';
import './StrengthPage.css'; 
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const StrengthPage = () => {
    const [expertTeamPercent, setExpertTeamPercent] = useState(0);
    const [bestServicePercent, setBestServicePercent] = useState(0);

    useEffect(() => {
        // Animation for expert team percentage
        const expertTeamAnimation = setInterval(() => {
            setExpertTeamPercent((prev) => {
                if (prev < 80) return prev + 1;
                clearInterval(expertTeamAnimation);
                return prev;
            });
        }, 20); // Adjust interval for speed

        // Animation for best service percentage
        const bestServiceAnimation = setInterval(() => {
            setBestServicePercent((prev) => {
                if (prev < 75) return prev + 1;
                clearInterval(bestServiceAnimation);
                return prev;
            });
        }, 20); // Adjust interval for speed

        // Clean up on component unmount
        return () => {
            clearInterval(expertTeamAnimation);
            clearInterval(bestServiceAnimation);
        };
    }, []);

    return (
        <div className="strength-section">
            <div className="left-content">
                <h1>Giving The Job Opportunity That Fits With Your Profile</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                
                <div className="service-cards">
                    <div className="card">
                        <div className="icon-box slide-in">  
                            <img src={process.env.PUBLIC_URL + '/i1.png'} alt="Best Hiring Icon" />
                        </div>
                        <h3>The Best Hiring Agency Service</h3>
                        <p>Lorem ipsum dolor sit amet elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar dapibus leo.</p>
                    </div>

                    <div className="card">
                        <div className="icon-box slide-in"> 
                            <img src={process.env.PUBLIC_URL + '/i1.png'} alt="Best Hiring Icon" />
                        </div>
                        <h3><span>Give The Best Treatment to Worker</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit mattis pulvinar dapibus leo.</p>
                    </div>
                </div>
                        
                <div className="buttons">
                    <button className="btn start-btn">Start Consultation</button>
                    <button className="btn job-list-btn">View Job List</button>
                </div>
            </div>
                
            <div className="right-content">
                <img src={process.env.PUBLIC_URL + "/cover_2.webp"} alt="Consultation Icon" width="650" height="600"/>

            <div className="stats">

               {/* <div className="stat">
                        <div className="icon-box slide-in"> 
                         <CircularProgressbar value={expertTeamPercent} text={`${expertTeamPercent}%`} />
                        <h2>Expert Team</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                  </div>       
                        
               <div className="stat">
                        <div className="icon-box slide-in"> 
                        <CircularProgressbar value={bestServicePercent} text={`${bestServicePercent}%`} />
                        <h2>Best Service</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>

                </div> */}


                    <div className="stat">
                        <CircularProgressbar value={expertTeamPercent} text={`${expertTeamPercent}%`} />
                        <h2>Expert Team</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className="stat">
                        <CircularProgressbar value={bestServicePercent} text={`${bestServicePercent}%`} />
                        <h2>Best Service</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrengthPage;
