import React from 'react';
import NavBar from '../../Components/Nav/NavBar';
import './Home.css';
import JamonDixon from '../../Images/Jtitle.png'


const Home = () => {
    return (
        <div className="home-overall-container">
            <NavBar />
            <div className="home-container">
                <div className="home-graphic-container">
                    <img className="home-graphic" src={JamonDixon} alt="name"/>
                </div>
                <div className="home-profession-container">
                    <h1 className="home-profession"> FULL STACK SOFTWARE ENGINEER</h1>
                </div>
            </div>
        </div>
    );
};

export default Home