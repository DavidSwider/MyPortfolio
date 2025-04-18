import React from 'react';
import "../css/Projects.css";

const ProjectsComponents = [
        {
            title: "Task List App",
            description: "A simple task list application built with React. Users can add, delete, and mark tasks as completed.",
            technologies: ["React", "JavaScript", "CSS"],
            liveLink: "https://example.com/task-list-app",
            image: "https://via.placeholder.com/150",
        },
        {
            title: "Weather App",
            description: "A weather application that fetches data from a weather API and displays current weather conditions.",
            technologies: ["React", "API", "CSS"],
            liveLink: "https://example.com/weather-app",
            image: "https://via.placeholder.com/150",
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio website to showcase my projects and skills.",
            technologies: ["React", "CSS"],
            liveLink: "https://example.com/portfolio",
            image: "https://via.placeholder.com/150",
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