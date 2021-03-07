import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import '../../css/WholePage.css';

import HomePage from '../../pages/Home/HomePage.js';
import AboutMe from '../../pages/AboutMe/AboutMe.js';
import Education from '../../pages/Education/Education.js';
import Contact from '../../pages/Contact/ContactPage.js'
import NavBar from '../../components/NavBar.js';

import TestNavBar from '../../components/TestNavBar.js';

const WholePage = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (

        <div className="WholePage">

            <div id="nav">
                <NavBar />
            </div>
    
            <div id="home">
                <HomePage id="homepage"> </HomePage>
            </div>
    
            <div id="aboutme" data-aos="fade-left">
                <AboutMe id="aboutme"> </AboutMe>
            </div>
    
            <div id="education" data-aos="fade-right">
                <Education id="education"> </Education>
            </div>
    
            <div id="contact" data-aos="fade-left">
                <Contact id="contact"> </Contact>
            </div>
        
        </div>
    )
}

export default WholePage;