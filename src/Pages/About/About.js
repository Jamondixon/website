import React from 'react';
import Nav from '../../Components/Nav/NavBar';
import './About.css';
import Cancun from '../../Images/profpic.jpg'

const About = () => {
    return (
        <div>
            <Nav />
            <div className="about-container">
                <div className="about-title-container">
                    <h1 className="about-title">ABOUT</h1>
                </div>
                <div>
                    <img src={Cancun} classname="balcony-image" alt="Jamon balcony"/>
                </div>
                <div className="body-container">
                    <div className='text-container'>
                        <div className='first-body'>
                            <div className='paragraph-container'>
                                <h4 className='about-subtitle'>BACKGROUND</h4>
                                <p className='about-body'>
                                Full-stack web developer with a curiosity of what makes things work and an aptitude for problem solving. I'm an avid sports fan and love to go see some live music with my fiance, Ellie. A regular at music festivals all over the United States and you can always find me at the disc golf course in my free time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;