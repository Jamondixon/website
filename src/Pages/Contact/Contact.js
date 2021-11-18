import React, { useState } from 'react';
import Nav from '../../Components/Nav/NavBar'
import LinkedIn from "../../Images/li.png"
import Github from "../../Images/github.png"
import Facebook from "../../Images/fb.png"
import Medium from "../../Images/medium.png"
import Email from "../../Images/cropped-email.png"
import Phone from "../../Images/cropped-phone.png"
// import Swal from 'sweetalert2'
import emailjs from 'emailjs-com';
import './Contact.css'
import Loader from '../../Components/Loader/Loader';

const Contact = (props) => {
    

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_r3fzj3m',
            'template_5uhv51m',
            e.target,
            'user_tCOSklBFi1ZSCjFUFhtxC'
        )
        .then(
            (result) => {
            setSent(true)
            setError(false)
            },
            (error) => {
            setError(true)
            setSent(false)
            }
        );
        clearForm(e);
    };

    const clearForm = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    const successOrFail = () => {
        if (sent === true && error === false) {
        return (
            alert('Message sent!')
        );
        }
        if (error === true && sent === false) {
        return (
            alert('Error, please try again.')
        );
        } else {
        return null;
        }
    };
    return (
        <div className="contact-overall-container">
            <Loader/>
            <Nav />
            <div className="contact-container">
                <div className="contact-title-container">
                    <h1 className="contact-title">CONTACT</h1>
                </div>
                <div className='form-side'>
                    <div className='form-container'>
                        <form className='contact-form' onSubmit={sendEmail}>
                        <h3 className='message-text'>Message me!</h3>
                        <input
                            type='text'
                            placeholder='Name...'
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type='email'
                            placeholder='Your Email...'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type='text'
                            placeholder='Subject...'
                            name='subject'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                        <textarea
                            className='message'
                            placeholder='Your message...'
                            rows='6'
                            cols='6'
                            name='message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <div className='success-message-container'>
                            {successOrFail()}
                        </div>
                        <div className='form-button-container'>
                            <div className='btn1'>
                            <button
                                className='button send'
                                type='submit'
                            >
                                SEND
                            </button>
                            </div>
                            <div>
                            <button
                                type='button'
                                className='clear-button'
                                onClick={(e) => clearForm(e)}
                            >
                                CLEAR
                            </button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                <div className="contact-details-container">
                        {/* <h2 className="contact-subtitle">Get in touch with me!</h2> */}
                        <h3 className="contact-email-title">EMAIL</h3>
                        {/* <h4 className="contact-email-value">Jamonadixon@gmail.com</h4> */}
                        <img className="email-value" src={Email} alt="email" />
                        <h3 className="contact-phone-title">PHONE</h3>
                        {/* <h4 className="contact-phone-value">806-620-6896</h4> */}
                        <img className="phone-value" src={Phone} alt="phone" />
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