import React from 'react';
import '../css/Aboutme.css';

const AboutmeComponent = () => {
  return (
    <div className="about-me-container">
      <h1 className="about-me-header">Hello!</h1>
      <p className="about-me-text">
        I'm David Swider a former Military Data Analyist turned Full Stack Web Developer with a strong passion for building dynamic, responsive, and user-friendly web applications.
        My journey from handling critical data in the military to engineering interactive web experiences has been driven by curiosity, discipline, and a desire to make a real impact through technology.
        I specialize in everything from frontend frameworks like <strong>Reat</strong> and <strong>TypeScript</strong> to backend technologies like <strong>Node.js</strong> , <strong>Express</strong> and <strong>MongoDB</strong> , with a strong focus on <strong>Security (JWT) </strong> , <strong>Testing (Cypress) </strong>, and <strong>Continuous Integration (GitHub Actions)</strong>.
        Weather it's developing RESTful APIs, integrating GraphQL, or ensuring secure user authentication, I take pride in writing clean, maintable code.
        Beyond the keyboard, I thrive on solving tough problems, continuously learning, and collaborating with others. I also love fishing with friends and spending quality time with my family - the perfect way to recharge and come back to work inspired.
        <br />
        Let's build something amazing together!
        <br />
      </p>
    </div>
  );
};

export default AboutmeComponent;
// This component serves as a simple "About Me" section for a portfolio website.