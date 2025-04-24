import React from 'react';
import "../css/Projects.css";

const ProjectsComponents = [
        {
            title: "Storm Chaser",
            description: "Storm Chaser is a realtime weather App that shows an extendted 5 day forcast.",
            technologies: ["React", "JavaScript", "CSS"],
            liveLink: "https://strom-chaser.onrender.com",
            image: "https://superdevresources.com/wp-content/uploads/2014/02/Weather-Api.jpg",
        },
        {
            title: "Task List App",
            description: "The Task List App is a full-stack web application that allows users to add, update, retrieve, and delete tasks while ensuring secure authentication with JWT (JSON Web Token). This app is built using React for the frontend, GraphQL with Node.js and Express.js for the backend, and MongoDB with Mongoose for the database. It also integrates GitHub Actions for CI/CD and is deployed on Render.",
            technologies: ["React", "API", "CSS"],
            liveLink: "https://finalproject-3922.onrender.com/",
            image: "https://www.proofhub.com/articles/wp-content/uploads/2023/11/Best-To-Do-List-Apps-For-Better-Task-Management.jpg",
        },
        {
            title: "Candidate Search",
            description: "The Candidate Search Application is a web-based tool that allows users to review potential candidates and save or reject them. It displays relevant details about each candidate, provides navigation through available candidates, and maintains a list of saved candidates even after page reloads.",
            technologies: ["React", "CSS"],
            liveLink: "https://candidatesearch-ndbo.onrender.com",
            image: "https://github.com/DavidSwider/CandidateSearch/raw/main/image.png",
        },
    ];

const ProjectsComponent = () => {
    return (
        <div className="projects-container">
            <h1 className="projects-header">Projects</h1>
            <div className="projects-grid">
                {ProjectsComponents.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                        <p className="project-technologies">Technologies: {project.technologies.join(", ")}</p>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-link">View Live</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsComponent;