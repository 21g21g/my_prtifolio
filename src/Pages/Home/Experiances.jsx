import React from 'react';
import './Experiances.css'; 

export default function Experiances() {
  return (
    <section className="skills-section" id="mySkills">
      <div className="portfolio-container">
        <h2 className="skills-section-heading">My Experiences</h2>
      </div>
      <div className="skills-section-container">
        <div className="skills-section-card">
          <div className="skills-section-img">
          </div>
          <div className="skills-section-card-content">
            <h3 className="skills-section-title">Frontend Developer at Bahir Dar Incubation Center</h3>
            <p className="skills-section-date">May to July 2023 (3 months)</p>
            <p className="skills-section-description">
              As a frontend developer at the Bahir Dar Incubation Center, I had the opportunity to work on various innovative projects, leveraging my expertise in React.js to create dynamic, responsive, and user-friendly web applications. My role involved collaborating with a multidisciplinary team to bring ideas to life and deliver high-quality digital solutions.
            </p>
          </div>
        </div>
        <div className="skills-section-card">
          <div className="skills-section-img">
            {/* Optionally add an image or icon here */}
          </div>
          <div className="skills-section-card-content">
            <h3 className="skills-section-title">Full Stack Developer at Hahu Jobs</h3>
            <p className="skills-section-date">April to July 2024 (3 months)</p>
            <p className="skills-section-description">
              At this tech company, I worked with Vue, Tailwind, Hasura, GraphQL, PostgreSQL, Golang, and Flutter, completing a Rick and Morty for both website and mobile app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}