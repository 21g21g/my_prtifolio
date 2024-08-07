import React from 'react';
import './HeroSection.css'; 


export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Gebeyehu</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am a skilled full-stack developer with a strong background in CSS, HTML, JavaScript, React, Vue.js, Node.js, and MongoDB. I specialize in creating dynamic, user-friendly web applications, with a focus on delivering seamless user experiences and scalable server-side solutions. My proficiency with Apollo Client enhances my ability to manage data fetching and state management in complex applications.
          </p>
        </div>
        {/* <button className="btn btn-primary">Get In Touch</button> */}
      </div>
      <div className="hero--section--img">
        <img src="./img/gebb.jpeg" alt="Hero Section" />
      </div>
    </section>
  );
}