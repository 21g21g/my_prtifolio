import React from 'react';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaGithub, FaTwitter, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactMe.css'; 

export default function ContactMe() {
  

  return (
    <section id="Contact" className="contact-section">
      <div className="contact-header">
        <h2>Contact Me</h2>
        <p className="text-lg">
        If you would like to get in touch with me, please feel free to contact me        </p>
      </div>
      <div className="contact-content">
       
        <div className="contact-info">
          <h3>Reach me at:</h3>
          <div className="contact-links">
            <a href="tel:+1234567890" className="contact-link">
              <FaPhone size={20} /> +251984198343
            </a>
            <a href="https://www.google.com/maps/place/Your+Address" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaMapMarkerAlt size={20} /> Addis Ababa
            </a>
          </div>
          <h3>Connect with me:</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/gebeyehu-assega-b04941258" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/21g21g" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
         
          </div>
        </div>
      </div>
    </section>
  );
}