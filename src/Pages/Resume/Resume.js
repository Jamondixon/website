import Nav from '../../Components/Nav/NavBar'
import Doc from '../../Images/docpdf.pdf'
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
                    width='80%'
                    height='200%'
                    frameBorder='2px'
                    type='application/pdf'
                    className='pdf'
                    ></embed>
                </div>
            </div>
        </div>
    );
};

export default Resume;