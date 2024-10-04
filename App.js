// npm install react-router-dom 
// npm install @fortawesome/fontawesome-free
// npm install react-slick slick-carousel
// npm install react-responsive-carousel
// npm install recharts
// npm install chart.js
// npm install react-icons
// npm install react-glider --save


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import SocialLinks from '../src/components/SocialLinks';
// import NavBar from './NavBar';
import MenuBar from '../src/components/MenuBar';
import FirstPage from './components/FirstPage';
import FinancialOffer from './components/FinancialOffer';
import OfferAcceptanceLetterCalculator from './components/OfferAcceptanceLetterCalculator';
import ConsiderationTable from './components/ConsiderationTable';
import SimpleGraph from './components/SimpleGraph';
import SmallCalculator from './components/SmallCalculator';
import SimpleCarousel from './components/SimpleCarousel'; 

import Start from './components/Start';
// import PersonalityTest from "./components/PersonalityTest";
import './App.css';
import '../src/components/FinancialOffer.css';
 

import CareerCounseling from '../src/components/Personal Solutions/CareerCounseling';
import CVProfileServices from '../src/components/Personal Solutions/CVProfileServices';
import JobSupportServices from '../src/components/Personal Solutions/JobSupportServices';
import SelfDiscovery from '../src/components/Personal Solutions/SelfDiscovery';
import Sanjeeda from '../src/components/Social Services/Sanjeeda';

import OPEN from '../src/components/Social Services/OPEN';
import Flux from '../src/components/Social Services/Flux';
import ForeignInvestorSupport from '../src/components/Social Services/ForeignInvestorSupport';

import HRManagement   from '../src/components/Business Solutions/HRManagement';
import ResearchFrameworks from './components/Business Solutions/ResearchFrameworks';
import BusinessConsulting from './components/Business Solutions/BusinessConsulting';

import Header from '../src/components/Header';
import About from "../src/components/About";
import Intro from "../src/components/Intro";
import Services from "../src/components/Services";
import HomePage from '../src/components/HomePage';
import ButtonSection from '../src/components/ButtonSection';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
 
// HR PART
import CareerPage from './components/HR/CareerPage';
import PersonalityTest from '../src/components/HR/PersonalityTest'; 
import StrengthPage from './components/HR/StrengthPage';
import HROverview from '../src/components/HR/HROverview';
function App() {
return (
<Router>
<div className="App">
 
<Header/> 


<Routes>
<Route path="/" element={<HomePage />} />
<Route path='/header' element= {<Header/>}/>
<Route path = '/about' element = {<About/>}/>
<Route path = '/' element = {<About/>}/>
<Route path = '/intro' element = {<Intro/>}/>
<Route path = '/' element = {<Intro/>}/>
<Route path = '/services' element = {<Services/>}/>
<Route path = '/' element = {<Services/>}/>


{/* HR PART */}
<Route path='hr_careerpage' element ={<CareerPage/>} />
<Route path = 'hr_personalitytest' element = {<PersonalityTest/>} />
<Route StrengthPage = 'hr_strength_page' element ={<StrengthPage/>} />
<Route HROverview path = 'hr_overview' element = {<HROverview/>} />

<Route path='SocialLinks' element = {<SocialLinks/>} />
<Route path = '/home_page' element = {<HomePage/>}/>
<Route path = '/menubar' element = {<MenuBar/>}/>
<Route path="/Buttons" element={<ButtonSection />} />
<Route path = '/footer' element = {<Footer/>}/>
<Route path='carousel' element = {<SimpleCarousel/>}/>


<Route path="/CareerCounseling" element={<CareerCounseling />} />
<Route path="/CVProfileServices" element={<CVProfileServices />} />
<Route path="/JobSupportServices" element={<JobSupportServices />} />
<Route path="/SelfDiscovery" element={<SelfDiscovery />} />

<Route path="/sanjeeda" element={<Sanjeeda />} />
<Route path="/open" element={<OPEN />} />
<Route path="/flux" element={<Flux />} />
<Route path="/foreign-investor-support" element={<ForeignInvestorSupport />} />

<Route path="/hr-management" element={<HRManagement />} />
<Route path="/research-frameworks" element={<ResearchFrameworks />} />
<Route path="/business-consulting" element={<BusinessConsulting />} />

<Route path="/start" element ={<Start/>}/>
<Route path="/first-page" element={<FirstPage />} />
<Route path="/consideration" element={<ConsiderationTable />} />
<Route path="/graph" element={<SimpleGraph />} />
<Route path="/personality-test" element={<PersonalityTest />} />
<Route path="/financial-offer" element={<FinancialOffer />} />
<Route path="/offer-acceptance-letter-calculator" element={<OfferAcceptanceLetterCalculator />} />
<Route path="/small-calculator" element={<SmallCalculator />} />
</Routes>
 </div>
 <Footer/>

</Router>
);
}
export default App;

/* Ensure that the body and html cover the full height of the viewport */
// html, body {
//   height: 100%;
//   margin: 0;
//   padding: 0;
// }

// .App {
//   min-height: 100vh; /* Ensure the App container covers at least the full height of the viewport */
//   background-image: url('../public/WhatsApp\ Image\ 2024-08-13\ at\ 12.45.09\ PM.jpeg');
//   background-size: cover; /* Cover the entire viewport */
//   background-repeat: no-repeat; /* Prevent repeating the image */
//   background-position: center center; /* Center the image */
// }

// /* Additional styles if needed */
// .header {
//   background-color: rgba(0, 123, 255, 0.8); /* Semi-transparent background for header */
//   color: white;
//   padding: 15px 0;
//   position: fixed;
//   width: 100%;
//   top: 0;
//   left: 0;
//   z-index: 1000;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional shadow for better visibility */
// }

// .header h1 {
//   margin: 0;
// }

// .page-container {
//   padding: 60px 20px 20px;
//   margin-top: 80px; /* Space for fixed header */
// }

// /* Button styling */
// button {
//   background-color: #007BFF;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   cursor: pointer;
//   margin: 10px 0;
//   border-radius: 5px;
// }

// button:hover {
//   background-color: #0056b3;
// }

// /* Table styling */
// table {
//   width: 100%;
//   margin: 20px 0;
//   border-collapse: collapse;
// }

// table, th, td {
//   border: 1px solid #ddd;
// }

// th, td {
//   padding: 10px;
//   text-align: left;
// }

// th {
//   background-color: #007BFF;
//   color: white;
// }

// /* Link styling */
// a {
//   text-decoration: none;
//   color: #007BFF;
// }

// a:hover {
//   text-decoration: underline;
// }

