import Nav from '../../Components/Nav/NavBar'
import Doc from '../../Images/Resume.pdf'
import Medium from "../../Images/medium.png"
import './Resume.css'

const Resume = () => {
    return (
        <div className="resume-overall-container">
            <Nav />
            <div className="resume-container">
                <div className="resume-title-container">
                    <h1 className="resume-title">RESUME</h1>
                </div>
                <div className="pdf-container">
                    <embed src={Doc}
                    width='100%'
                    height='200%'
                    frameBorder='2px'
                    type='application/pdf'
                    className='pdf'
                    ></embed>
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

export default Resume;