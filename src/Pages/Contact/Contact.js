import Nav from '../../Components/Nav/NavBar'
import LinkedIn from "../../Images/linkedIn.png"
import Github from "../../Images/github.png"
import Facebook from "../../Images/facebook.png"
import Medium from "../../Images/medium.png"
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Nav />
            <div className="contact-container">
                <div className="contact-title-container">
                    <h1 className="contact-title">CONTACT</h1>
                </div>
                <div className="contact-subtitle-container">
                    <h2 className="contact-subtitle">Get in touch with me!</h2>
                </div>
                <div className="conctact-details-container">
                    <div className="contact-email-container">
                        <h3 className="contact-email-title">EMAIL</h3>
                        <h4 className="contact-email-title">Jamonadixon@gmail.com</h4>
                    </div>
                    <div className="contact-icons-container">
                        <div className="contact-icons-inner-container">
                            <a href="https://www.linkedin.com/in/jamondixon/" 
                            rel="noreferrer" 
                            target="_blank"
                            >
                                <img className="contact-social-icon" src={LinkedIn} alt="LinkedIn Icon"/>
                            </a>
                            <a href="https://github.com/Jamondixon" 
                            rel="noreferrer" 
                            target="_blank"
                            >
                                <img className="contact-social-icon" src={Github} alt="Github Icon"/>
                            </a>
                            <a href="https://www.facebook.com/jamon.dixon" 
                            rel="noreferrer" 
                            target="_blank"
                            >
                                <img className="contact-social-icon" src={Facebook} alt="Facebook Icon"/>
                            </a>
                            <a href="https://jamondixon.medium.com/" 
                            rel="noreferrer" 
                            target="_blank"
                            >
                                <img className="contact-social-icon" src={Medium} alt="Medium Icon"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;