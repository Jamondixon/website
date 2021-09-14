import React from 'react';
import Nav from '../../Components/Nav/NavBar';
import './About.css';
import Cancun from '../../Images/profpic.jpg'

const About = () => {
    return (
        <div className="about-overall-container">
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
                                <h2 className='about-subtitle'>BACKGROUND</h2>
                                <p className='about-body'>
                                Full-stack web developer with a curiosity of what makes things work and an aptitude for problem solving. I'm an avid sports fan and love to go see some live music with my fiance, Ellie. A regular at music festivals all over the United States and you can always find me at the disc golf course in my free time.
                                </p>
                            </div>
                            <div className="padding-div">
                                <div className="skill-container">
                                    <div className="skill-heading-container">
                                        <h2 className="skill-title">SKILLS</h2>
                                        <p className="skill-paragraph">
                                            <ul className="skill-list">
                                                <li className='skill-list-item'>HTML</li>
                                                <li className='skill-list-item'>CSS</li>
                                                <li className='skill-list-item'>Ruby</li>
                                                <li className='skill-list-item'>Rails</li>
                                                <li className='skill-list-item'>Javascript</li>
                                                <li className='skill-list-item'>React</li>
                                                <li className='skill-list-item'>React Native</li>
                                                <li className='skill-list-item'>Git</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;