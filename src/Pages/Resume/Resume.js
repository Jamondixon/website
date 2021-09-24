import Nav from '../../Components/Nav/NavBar'
import Doc from '../../Images/Resume.pdf'
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
                    className='pdf'
                    ></embed>
                </div>
            </div>
            <footer>
            </footer>
        </div>
    );
};

export default Resume;