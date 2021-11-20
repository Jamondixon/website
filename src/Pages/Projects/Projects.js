import Nav from '../../Components/Nav/NavBar'
import './Projects.css'
import Quesofinder from "../../Images/303quesofinder.png"

const Projects = (props) => {
    return (
        <div className="projects-overall-container">
            <Nav />
            <div className="projects-container">
                <div className="projects-title-container">
                    <h1 className="projects-title">PROJECTS</h1>
                </div>
                <div className="projects-card-container">
                    <div className="projects-card">
                        <div className="projects-card-title-container">
                            <h2 className="projects-card-title">303 QuesoFinder</h2>
                        </div>
                        <img src={Quesofinder}  className="quesofinder" alt="queso finder pic" loading="lazy" />
                        <div className="anchor-container">
                            <a className="projects-card-link"
                            href='https://hopeful-raman-70b1e5.netlify.app/'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                <button className="projects-card-button" 
                                >Click to View</button>
                            </a>
                        </div>
                        <div className="projects-card-description-container">
                            <h3 className="projects-card-description">SPA designed to showcase, rate, and point people in the direction of Denver’s best queso</h3>
                        </div>
                    </div>
                    <div className="projects-card-two">
                        <div className="projects-card-title-container">
                            <h2 className="projects-card-title">CryptoCurrent</h2>
                            <a className="projects-card-link"
                            href='https://gracious-kilby-8e4aa8.netlify.app/'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                <button className="projects-card-button" 
                                >Click to View</button>
                            </a>
                            <h3 className="projects-card-description">JavaScript application to track cryptocurrency prices in real time with graphical representation.</h3>
                        </div>
                    </div>
                    <div className="projects-card-three">
                        <div className="projects-card-title-container">
                            <h2 className="projects-card-title">Forgotten Friend</h2>
                            <a className="projects-card-link"
                            href='https://github.com/Jamondixon/ForgottenFriend'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                <button className="projects-card-button" 
                                >Click to View</button>
                            </a>
                            <h3 className="projects-card-description">React Native app to help people connect with others at the same event and help find items they may have forgotten upon arrival.</h3>
                        </div>
                    </div>
                    <div className="projects-card-four">
                        <div className="projects-card-title-container">
                            <h2 className="projects-card-title">Just Fling It</h2>
                            <a className="projects-card-link"
                            href='https://awesome-hypatia-163c1c.netlify.app/'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                <button className="projects-card-button" 
                                >Click to View</button>
                            </a>
                            <h3 className="projects-card-description">JavaScript website to help connect disc golfers with the best custom-dyed discs</h3>
                        </div>
                    </div>
                    <div className="projects-card-five">
                        <div className="projects-card-title-container">
                            <h2 className="projects-card-title">Guessing Game</h2>
                            <a className="projects-card-link"
                            href='https://jolly-perlman-1ec2fc.netlify.app/'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                <button className="projects-card-button" 
                                >Click to View</button>
                            </a>
                            <h3 className="projects-card-description">Higher-lower guessing game created with JavaScript where user decides the number range and attempts to guess a random number in between</h3>
                        </div>
                    </div>
                    <div className="projects-card-six">
                        <div className="projects-card-title-container">
                            <h2 className="projects-card-title">Computender</h2>
                            <a className="projects-card-link"
                            href='https://github.com/Jamondixon/virtual_bartender'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                <button className="projects-card-button" 
                                >Click to View</button>
                            </a>
                            <h3 className="projects-card-description">Ruby CLI app that matches users with drink recipes</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;