import React from 'react';
import Nav from '../../Components/Nav/NavBar';
import './About.css';
import Profile from '../../Images/headshotcropped1.png'
import Queso from '../../Images/prettyjamon1.jpg'
import Skills from '../../Images/skillscropped.png'
import Professional from '../../Images/professionalcropped.png'
import Personal from '../../Images/personalcropped.png'

const About = () => {
    return (
        <div className="about-overall-container">
            <Nav />
            <div className="about-container">
                <div className="about-title-container">
                    <h1 className="about-title">ABOUT</h1>
                </div>
                <div className="profile-image-container">
                    <img src={Profile} className="profile-image" alt="Jamon headshot"/>
                </div>
                <div className="padding-div">
                    <div className="skill-container">
                        <div className="skill-heading-container">
                            {/* <h2 className="skill-title">SKILLS</h2> */}
                            <img src={Skills} className="skill-title" alt="skills" />
                            <p className="skill-paragraph">
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
                            </p>
                        </div>
                    </div>
                </div>
                <div className="body-container">
                    <div className='text-container'>
                        <div className='professional-paragraph-container'>
                            {/* <h2 className='about-subtitle'>PROFESSIONAL LIFE</h2> */}
                            <img src={Professional} className="professional-title" alt="professional" />
                            <p className='about-body'>
                                Former cannabis connoisseur turned full-stack developer with a curious mind and an aptitude for art. I Entered the world of coding in 2020 after a case of COVID-19 allowed me some time to reevaluate my aspirations for the future. I wanted to work towards growing my creative talents and cultivating a sense of purpose, rather than cannabis. As a graduate of Texas Tech University and Flatiron School, I come to the tech industry commited to being a lifelong learner and capable of conquering whatever life throws at me.
                            </p>
                        </div>
                        <div className="queso-image-container">
                            <img className="queso-image" src={Queso} alt="queso scene" />
                        </div>
                        <div className='personal-paragraph-container'>
                            {/* <h2 className='about-subtitle'>PERSONAL LIFE</h2> */}
                            <img src={Personal} className="personal-title" alt="personal" />
                            <p className='about-body'>
                                I'm an avid sports fan and love to go see live music with my fiancé, Ellie. She and I love to sample the best food and drink from the region of wherever we happen to be traveling. I'm a regular at music festivals all over the United States and you can always find me at my local disc golf course in my free time. When I am not out and about I enjoy curling up on the couch to watch a good movie with my fluffy, black, rescue cat named Artemis. Most recently, I have taken an interest in cryptocurrency and the latest blockchain technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;