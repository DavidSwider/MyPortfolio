import React from 'react';
import "../css/Form.css";
import { useState } from 'react';
import emailjs from 'emailjs-com';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const 
        templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message
        };
        emailjs.send('service_peorywg', 'template_rz7k6si', formData, 'W5dRSIh6lE2V47Y8y', templateParams)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (error) => {
                console.log('FAILED...', error);
            });
    };

    return (
        <div className="form-container">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
                <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                ></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}
export default FormComponent;

