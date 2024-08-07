import { Link } from "react-scroll";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { LuFigma } from "react-icons/lu";
import { GrDocker } from "react-icons/gr";
import './Footer.css';
function Footer() {
  return (
    <footer className="footer--container">
       <div className="scrolling-icons">
        <FaGithub size={32} />
        <FaReact size={32} />
        <IoLogoVue size={32} />
        <IoLogoJavascript size={32} />
        <FaCss3Alt size={32} />
        <LuFigma size={32} />
        <GrDocker size={32} />
        <FaGithub size={32} />
        <FaReact size={32} />
        <IoLogoVue size={32} />
        <IoLogoJavascript size={32} />
        <FaCss3Alt size={32} />
        <LuFigma size={32} />
        <GrDocker size={32} />
      </div>
    
     
    </footer>
  );
}

export default Footer;
