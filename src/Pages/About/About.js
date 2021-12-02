import React from 'react';
import Nav from '../../Components/Nav/NavBar';
import './About.css';
// import Profile from '../../Images/headshotcropped1.png'
import Queso from '../../Images/prettyjamon1.jpg'
import Skills from '../../Images/skillscropped.png'
import Professional from '../../Images/professionalcropped.png'
import Personal from '../../Images/personalcropped.png'

const About = (props) => {
    return (
        <div className="about-overall-container">
            <Nav />
            <div className="about-container">
                <div className="profile-skill-container">
                    <div className="about-title-container">
                        <h1 className="about-title">ABOUT</h1>
                    </div>
                    {/* <div className="profile-image-container">
                        <img src={Profile} className="profile-image" alt="Jamon headshot" loading="lazy"/>
                    </div> */}
                </div>
                <div className="padding-div">
                </div>
                <div className="body-container">
                    <div className='text-container'>
                        <div className='professional-paragraph-container'>
                            {/* <h2 className='about-subtitle'>PROFESSIONAL LIFE</h2> */}
                            <img src={Professional} className="professional-title" alt="professional" loading="lazy"/>
                            <p className='about-body'>
                                Hi, my name is Jamon Dixon and I am a native Texan currently residing in Austin. I have always had a passion for figuring out what makes things work behind the scences and have translated that quality into my pursuit of web and software development. Frontend development is quickly becoming my favorite to work with, but I am a capable full-stack engineer.  As a graduate of Texas Tech University and Flatiron School, I come to the tech industry commited to being a lifelong learner and capable of conquering whatever life throws at me. I use my experience across many different industries and my ability to adapt to any type of environment to succeed at whatever I put my mind to.
                            </p>
                        </div>
                        <div className="queso-image-container">
                            <img className="queso-image" src={Queso} alt="queso scene" loading="lazy"/>
                        </div>
                        <div className='personal-paragraph-container'>
                            {/* <h2 className='about-subtitle'>PERSONAL LIFE</h2> */}
                            <img src={Personal} className="personal-title" alt="personal" loading="lazy"/>
                            <p className='about-body'>
                                I'm an avid sports fan and love to see live music with my fiancé, Ellie. We also enjoy traveling and sampling the best food and drink from the region. I'm a regular at music festivals all over the United States and you can always find me at my local disc golf course in my free time. When I am not out and about I enjoy curling up on the couch to watch a good movie with my fluffy, black, rescue cat named Artemis. As of late, I have taken an interest in cryptocurrency and the latest blockchain technologies.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="skill-container">
                    <div className="skill-heading-container">
                        <img src={Skills} className="skill-title" alt="skills" />
                        
                        <ul className="skill-list">
                            <li className='skill-list-item'>HTML</li>
                            <li className='skill-list-item'>CSS</li>
                            <li className='skill-list-item'>Ruby</li>
                            <li className='skill-list-item'>Ruby on Rails</li>
                            <li className='skill-list-item'>Javascript</li>
                            <li className='skill-list-item'>React</li>
                            <li className='skill-list-item'>React Native</li>
                            <li className='skill-list-item'>Heroku</li>
                            <li className='skill-list-item'>Bootstrap</li>
                            <li className='skill-list-item'>Git</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;