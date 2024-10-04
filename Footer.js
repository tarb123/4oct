import React from "react";
import "./Footer.css"; // Import CSS for custom styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2>Feel connected anytime, anywhere.</h2>
        <div className="footer-buttons">
          <button className="footer-btn">Receive News</button>
          <button className="footer-btn contact">Contact Us</button>
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <h3>COMPANY</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#brand">Brand Center</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>HELP CENTER</h3>
            <ul>
              <li><a href="#discord">Discord Server</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>LEGAL</h3>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#licensing">Licensing</a></li>
              <li><a href="#terms">Terms</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>DOWNLOAD</h3>
            <ul>
              <li><a href="#ios">iOS</a></li>
              <li><a href="#android">Android</a></li>
              <li><a href="#windows">Windows</a></li>
              <li><a href="#mac">MacOS</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2017 Conductivity Career & HR Solutions™. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-lines">
//         <hr className="line-before" />
//         <ul className="social-icons">
//           <li>
//             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//           </li>
//           <li>
//             <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-instagram"></i>
//             </a>
//           </li>
//           <li>
//             <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-youtube"></i>
//             </a>
//           </li>
//           <li>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-twitter"></i>
//             </a>
//           </li>
//           <li>
//             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//           </li>
//         </ul>
//         <hr className="line-after" />
//       </div>
 
//       <div className="footer-links">
//         <a href="/about">About Us </a>
//         <a href="/team">Team</a>
//         <a href="/termpolicy">Terms & Conditions</a>
//         <a href="/contact">Contact </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
