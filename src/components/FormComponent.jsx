import React from 'react';
import "../css/Form.css";
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const FormComponent = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

    const serviceId = 'service_rxd2drr';
    const templateId = 'template_rz7k6si';
    const publicKey = 'W5dRSIh6lE2V47Y8y';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'David Swider',
            message: message
        };
           emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  
    };

    return (
        <div className="form-container">
            <h2>Reach Out</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
               <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    placeholder="Your Message"
                    cols="30"
                    rows="10"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                >
                </textarea>
                <button type="submit">Send Email</button>
            </form>
        </div>
    );
}
export default FormComponent;

