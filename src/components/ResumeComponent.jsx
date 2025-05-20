import React from 'react';
import "../css/Resume.css";

const ResumeComponent = () => {
    return (
        <div className="resume-container">
            <div className="resume-card">
                <div className="resume-header">
                    <h1>Resume</h1>
                    <a 
                        className="resume-link"
                        href="https://docs.google.com/document/d/1yDHfmpv4LREZEHRa7pRLY7cr55Xmca4EbIJPju0eo8g/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Resume
                    </a>
                </div>

            <section className="resume-summary">
            <h2>Professional Summary </h2>
                <p>
                    I'm a Full Stack Engineer and a Uconn Graduate with a strong foundation in software development, web Frameworks, and database management. Military background with a Secret Security Clearance and a proven experience as a data analyst. Skilled in building secure, responsive applications using modern technologies and frameworks. Strong focus on CI/CD practices and agile development methodologies. 
                </p>
            </section>

            <section className="resume-skills">
            <h2>Technical Skills </h2>
            <ul>
                <li><strong>Languages:</strong> HTML, CSS, JavaScript, TypeScript, Python, React </li>
                <li><strong>Security:</strong> MERN Stack, JWT Authentication </li>
                <li><strong>CI/CD & Testing:</strong> Cypress, GitHub Actions</li>
                <li><strong>Databases:</strong> MySQL, NoSQL, PostgreSQL, MondoDB, GraphQL, APIs</li>
                <li><strong>Web Frameworks:</strong> Node.js, Express.js, Vite, Mongoose</li>
                <li><strong>Technologies & Tools:</strong> Postman, Insomnia, Git, GitHub, Gitlab</li>
                <li><strong>Languages:</strong> English, Polish</li>
            </ul>
            </section>

            <section className="resume-education">
            <h2>Education</h2>
            <h5><strong>University of Connecticut</strong> - Full Stack Engineering certificate</h5> 
                <p>Graduated: March 2025</p>
            </section>

            <section className='resume-experience'>
                <h2>Professional Experience</h2>
                <p><strong>Data Analyst - U.S. Military</strong> ( from Nov 2020 to Apr 2024 )</p>
                <li>Handled sensitive information with a Secret Security Clearance</li>
                <li>Analyzed operational data to support decision-making and strategy</li>
                <li>Utilized scripting</li>
                <li>Collaborated with cross functional teams (Federal and State) to deliver secure and scalable solutions</li>

                <p><strong>Combat Medic - U.S. Army National Guard</strong>  ( from 2015 to Present )</p>
                <li>Responsible for thousands of people</li>
                <li>Worked with 50 + federal, state and local agencies</li>
                <li>Handled millions of dollars of equipment</li>
            </section>

            <section className='resume-projects'>
                <h2>Projects</h2>
                <p><strong>Task List Web Application</strong></p>
                <li>Developed a full-stack to-do list app using React, Node.js, Express, and MongoDB</li>
                <li>Integrated JWT authentication for secure user access</li>
                <li>Implemented CRUD operations with a responsive UI</li>
                <li>Automated tests using Cypress and deployed using GitHub Actions and Render</li>
                <p><strong>Book Search Engine </strong></p>
                <li>Created a React-based app that consumes the Google Books API</li>
                <li>Included secure login/signup using JWT</li>
                <li>Implemented local storage for saving user preferences</li>
                <li>Utilized MongoDB and GraphQL for back-end data management</li>
                <p><strong>Kanban Board with Authentication</strong></p>
                <li>Built a drag-and-drop Kanban board with login authentication</li>
                <li>Used JWT for secure access and local storage management</li>
                <li>Protected routes and maintained session security through timeouts</li>
            </section>

            <section>
                <h2>Security Clearance</h2>
                <p><u>Secret Security Clearance</u> - U.S. Military</p>
            </section>
        </div>
    </div>
    );
}

export default ResumeComponent;