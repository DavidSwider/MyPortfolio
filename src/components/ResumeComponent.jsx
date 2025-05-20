import React from 'react';
import "../css/Resume.css";

const ResumeComponent = () => {
    return (
        <div className="resume-container">
            <h1>Resume</h1>
            <p>Download my resume: <a href="/path/to/resume.pdf" download>Resume.pdf</a></p>
            <h2>Professional Summary </h2>
            <ul>
                <li>I'm a Full Stack Engineer and a Uconn Graduate with a strong foundation in software development, web Frameworks, and database management. Military background with a Secret Security Clearance and a proven experience as a data analyst. Skilled in building secure, responsive applications using modern technologies and frameworks. Strong focus on CI/CD practices and agile development methodologies. </li>
            </ul>
            <h2>Technical Skills </h2>
            <ul>
                <li>Languages: HTML, CSS, JavaScript, TypeScript, Python, React </li>
                <li>Security: MERN Stack, JWT Authentication </li>
                <li>CI/CD & Testing: Cypress, GitHub Actions</li>
                <li>Databases: MySQL, NoSQL, PostgreSQL, MondoDB, GraphQL, APIs</li>
                <li>Web Frameworks: Node.js, Express.js, Vite, Mongoose</li>
                <li>Technologies & Tools: Postman, Insomnia, Git, GitHub, Gitlab</li>
                <li> </li>
            </ul>
        </div>
    );
}

export default ResumeComponent;