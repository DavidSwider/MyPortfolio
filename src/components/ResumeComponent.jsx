import React from 'react';
import "../css/Resume.css";

const ResumeComponent = () => {
    return (
        <div className="resume-container">
            <h1>Resume</h1>
            <p>Download my resume: <a href="/path/to/resume.pdf" download>Resume.pdf</a></p>
            <h2>Experience</h2>
            <ul>
                <li>Software Engineer at XYZ Corp (2023 - Present)</li>
                <li>Intern at ABC Inc (2022 - 2023)</li>
            </ul>
            <h2>Education</h2>
            <ul>
                <li>Bachelor of Science in Computer Science, University of Example (2019 - 2023)</li>
            </ul>
        </div>
    );
}

export default ResumeComponent;