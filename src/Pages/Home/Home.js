import React from 'react';
import NavBar from '../../Components/Nav/NavBar';
import './Home.css';
import JamonDixon from '../../Images/Jtitle.png'

const Home = () => {
    return (
        <div className="home-overall-container">
            <NavBar />
            <div className="home-container">
                <div className="home-title-container">
                    <div className="home-graphic-container">
                        <img className="home-graphic" src={JamonDixon} alt="name"/>
                    </div>
                    <div className="home-profession-container">
                        <h1 className="home-profession">SOFTWARE ENGINEER | WEB DEVELOPER</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home