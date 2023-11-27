import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send('service_964izhk', 'template_z3yizjo', {
            to_name: "abeeraaber049@gmail.com",
            from_name: userName,
            message: userMessage,
            reply_to: userEmail,
            from_email: userEmail,
        }, 'DkyQ_XZu4Jz52uToT').then((result) => {
            const alertContent = `<div className="text-success bg-success bg-opacity-25 p-1 rounded mt-2">
                <small> <bold>Message sent successfully!</bold> We'll get back to you as soon as possible.</small>
              </div>`;

            document.getElementById('success-message').innerHTML = alertContent;
            if (document.getElementById('success-message').innerHTML === alertContent) {
                setTimeout(() => {
                    document.getElementById('success-message').innerHTML = '';
                }, 1000);
            }

            setUserName('');
            setUserEmail('');
            setUserMessage('');
        }, (error) => {
            // do something with error
        });
    };

    const handleChange = (e) => {
        if (e.target.name === 'user_name') {
            setUserName(e.target.value);
        }
        if (e.target.name === 'user_email') {
            setUserEmail(e.target.value);
        }
        if (e.target.name === 'message') {
            setUserMessage(e.target.value);
        }
    }

    return (
        <section className="page-section" id="contact">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        <form ref={form} onSubmit={sendEmail} id='contact-form'>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    id="user_name"
                                    name="user_name"
                                    value={userName}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Enter your name..."
                                    required
                                />
                                <label htmlFor="user_name">Full name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    id="user_email"
                                    name="user_email"
                                    value={userEmail}
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="name@example.com"
                                    required
                                />
                                <label htmlFor="user_email">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    value={userMessage}
                                    onChange={handleChange}
                                    placeholder="Enter your message here..."
                                    style={{ height: '10rem' }}
                                    required
                                ></textarea>
                                <label htmlFor="message">Message</label>
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary">
                                Send a message
                            </button>
                            <div className="col-12 mb-20">
                                <p id="success-message"></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;