import Nav from '../../Components/Nav/NavBar'
import './Projects.css'

const Projects = () => {
    return (
        <div className="projects-overall-container">
            <Nav />
            <div className="projects-container">
                <div className="projects-title-container">
                    <h1 className="projects-title">PROJECTS</h1>
                </div>
                <div className="card-container">
                    <div className="card">
                        <div className="card-title-container">
                            <h2 className="card-title">C-S-Sexy</h2>
                            <a className="card-link"
                            href='https://jamondixon.medium.com/c-s-sexy-576c7a377691'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                <button className="card-button" 
                                buttonStyle='primary--btn'>CHECK IT OUT!</button>
                            </a>
                            <h3 className="card-date">May 9th, 2021</h3>
                        </div>
                    </div>
                    <div className="card two">
                        <div className="card-title-container">
                            <h2 className="card-title">An ode to JSX</h2>
                            <a className="card-link"
                            href='https://medium.com/nerd-for-tech/an-ode-to-jsk-85f6ce8e0a6b'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                <button className="card-button" 
                                buttonStyle='primary--btn'>CHECK IT OUT!</button>
                            </a>
                            <h3 className="card-date">July 19th, 2021</h3>
                        </div>
                    </div>
                    <div className="card three">
                        <div className="card-title-container">
                            <h2 className="card-title">Hooks and Ladders Pt. 1</h2>
                            <a className="card-link"
                            href='https://medium.com/nerd-for-tech/hooks-and-ladders-8d4f708b054d'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                <button className="card-button" 
                                buttonStyle='primary--btn'>CHECK IT OUT!</button>
                            </a>
                            <h3 className="card-date">July 26th, 2021</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;