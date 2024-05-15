import React from "react";
import NavBar from "./Home/Navbar";
import "./About/About.css";

function About() {
  return (
    <div>
      <NavBar />
      <br />
      <br />
      <h1 className="who">So Who Am I?</h1>
      <div className="about-me">
        <h2>A Bit About Me</h2>
        <p>
          I'm currently a computer science student at CSUF. As of 2024 I am a
          junior...
        </p>
        <br />
        <br />
        <h2 className="tech-tools">Technologies and Tools</h2>
        <p className="tech-stack">
          Using a combination of modern tech stacks and reliable open-source
          software, i like to build personal project driven by interest and
          excitment of seeing ideads come into frution a few steps at a time.
        </p>
      </div>
      <br />
      <br />

      <div className="tech-grid">
        <div className="tech-item">
          <img src="images/cpp.png" alt="CPP" />
          <p>C++</p>
        </div>

        <div className="tech-item">
          <img src="images/JS.png" alt="JS" />
          <p>JS</p>
        </div>

        <div className="tech-item">
          <img src="images/linux.png" alt="Linux" />
          <p>Linux</p>
        </div>

        <div className="tech-item">
          <img src="images/python.svg.png" alt="Python" />
          <p>Python</p>
        </div>

        <div className="tech-item">
          <img src="images/react.svg.png" alt="React" />
          <p>React</p>
        </div>
      </div>
    </div>
  );
}

export default About;
