import React, { useState } from 'react';
import './ButtonSection.css';   

const ButtonSection = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

  const toggleDropdown1 = () => setIsDropdownOpen1(!isDropdownOpen1);
  const toggleDropdown2 = () => setIsDropdownOpen2(!isDropdownOpen2);
  const toggleDropdown3 = () => setIsDropdownOpen3(!isDropdownOpen3);

  return (
    <div className="button-section">
      
      {/* Personal Solutions Dropdown */}
      <div className="dropdown">
        <button onClick={toggleDropdown1}>Personal Solutions</button>
        {isDropdownOpen1 && (
          <div className="dropdown-content">
            <ul>
              <li><a href="/SelfDiscovery">Self Discovery</a></li>
              <li><a href="/CVProfileServices">CV & Profile Services</a></li>
              <li><a href="/CareerCounseling">Career Counseling</a></li>
              <li><a href="/JobSupportServices">Job Support Services</a></li>
            </ul>
          </div>
        )}
      </div>

      {/* Social Services Dropdown */}
      <div className="dropdown">
        <button onClick={toggleDropdown2}>Social Services</button>
        {isDropdownOpen2 && (
          <div className="dropdown-content">
            <ul>
              <li><a href="../sanjeeda">Sanjeeda</a></li>
              <li><a href="../open">OPEN</a></li>
              <li><a href="../flux">Flux</a></li>
              <li><a href="../foreign-investor-support">Foreign Investor Support</a></li>
            </ul>
          </div>
        )}
      </div>

      {/* Business Solutions Dropdown */}
      <div className="dropdown">
        <button onClick={toggleDropdown3}>Business Solutions</button>
        {isDropdownOpen3 && (
          <div className="dropdown-content">
            <ul>
              <li><a href="/hr-management">HR Services</a></li>
              <li><a href="/research-frameworks">Research & Frameworks</a></li>
              <li><a href="/business-consulting">Business Consulting</a></li>
            </ul>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default ButtonSection;
