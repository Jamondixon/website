import Nav from '../../Components/Nav/NavBar'
import './Blogs.css'
import Medium from "../../Images/medium.png"

const Blogs = () => {
    return (
        <div className="blogs-overall-container">
            <Nav />
            <div className="blogs-container">
                <div className="blogs-title-container">
                    <h1 className="blogs-title">BLOGS</h1>
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
                                buttonStyle='primary--btn'>LINK</button>
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
                                buttonStyle='primary--btn'>LINK</button>
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
                                buttonStyle='primary--btn'>LINK</button>
                            </a>
                            <h3 className="card-date">July 26th, 2021</h3>
                        </div>
                    </div>
                    <div className="card four">
                        <div className="card-title-container">
                            <h2 className="card-title">You down with SDLC...</h2>
                            <a className="card-link"
                            href='https://medium.com/codex/you-down-with-sdlc-yeah-you-know-me-2ad91b422b6c'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                <button className="card-button" 
                                buttonStyle='primary--btn'>LINK</button>
                            </a>
                            <h3 className="card-date">August 2nd, 2021</h3>
                        </div>
                    </div>
                    <div className="card five">
                        <div className="card-title-container">
                            <h2 className="card-title">Hooks and Ladders Pt. 2</h2>
                            <a className="card-link"
                            href='https://medium.com/codex/hooks-and-ladders-part-2-eea1dedcf52b'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                <button className="card-button" 
                                buttonStyle='primary--btn'>LINK</button>
                            </a>
                            <h3 className="card-date">August 9th, 2021</h3>
                        </div>
                    </div>
                    <div className="card six">
                        <div className="card-title-container">
                            <h2 className="card-title">A nod to Node.js</h2>
                            <a className="card-link"
                            href='https://medium.com/codex/a-nod-to-node-js-a0e39ee2bd3b'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                <button className="card-button" 
                                buttonStyle='primary--btn'>LINK</button>
                            </a>
                            <h3 className="card-date">August 16th, 2021</h3>
                        </div>
                    </div>
                    <div className="card seven">
                        <div className="card-title-container">
                            <h2 className="card-title">The Science of Semantic HTML</h2>
                            <a className="card-link"
                            href='https://medium.com/geekculture/the-science-of-semantic-html-c66fda24f105'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                <button className="card-button" 
                                buttonStyle='primary--btn'>LINK</button>
                            </a>
                            <h3 className="card-date">August 18th, 2021</h3>
                        </div>
                    </div>
                    <div className="card eight">
                        <div className="card-title-container">
                            <h2 className="card-title">3.2.1…We Have Deployment! Pt. 1</h2>
                            <a className="card-link"
                            href='https://medium.com/geekculture/3-2-1-we-have-deployment-f553e73dc76d'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                <button className="card-button" 
                                buttonStyle='primary--btn'>LINK</button>
                            </a>
                            <h3 className="card-date">August 29th, 2021</h3>
                        </div>
                    </div>
                    <div className="card nine">
                        <div className="card-title-container">
                            <h2 className="card-title">3.2.1…We Have Deployment! pt. 2</h2>
                            <a className="card-link"
                            href='https://medium.com/geekculture/3-2-1-we-have-deployment-596faf20ac91'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                <button className="card-button" 
                                buttonStyle='primary--btn'>LINK</button>
                            </a>
                            <h3 className="card-date">September 1st, 2021</h3>
                        </div>
                    </div>
                </div>
                <div className="footer">
                        <a href="https://jamondixon.medium.com/" 
                        rel="noreferrer" 
                        target="_blank"
                        >
                        <img className="contact-social-icon" src={Medium} alt="Medium Icon"/>
                        </a>
                    </div>
            </div>
        </div>
    );
};

export default Blogs;