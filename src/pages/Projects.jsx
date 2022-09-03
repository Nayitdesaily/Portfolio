import React from 'react';
import pokedex from '../assets/pokedex-project.jpg';
import crud from '../assets/crud-project.jpg';
import weather from '../assets/weather-app-project.jpg';
import '../styles/projects.css';
import gsap from 'gsap';
import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    gsap.fromTo(
      '.project-container',
      { opacity: 0 },
      { opacity: 1, duration: 3 }
    );

    gsap.fromTo(
      '.title-my-projects',
      { opacity: 0 },
      { opacity: 1, duration: 1.5, delay: 0.8 }
    );

    gsap.fromTo(
      '.pokedex-img',
      { opacity: 0 },
      { opacity: 1, duration: 1.5, delay: 1 }
    );

    gsap.fromTo(
      '.weather-img',
      { opacity: 0 },
      { opacity: 1, duration: 1.5, delay: 1.2 }
    );

    gsap.fromTo(
      '.crud-img',
      { opacity: 0 },
      { opacity: 1, duration: 1.5, delay: 1.4 }
    );
  }, []);

  return (
    <div className="project-page">
      <div className="project-container">
        <h3 className="title-my-projects">My Projects</h3>
        <a
          href="https://crud-user-nayit-desaily.netlify.app"
          target="_blank"
          className="crud-img"
        >
          <img src={crud} className="image-project" />
        </a>

        <a
          href="https://pokedex-redux-nayit-desaily.netlify.app"
          className="pokedex-img"
          target="_blank"
        >
          <img src={pokedex} className="image-project" />
        </a>

        <a
          href="https://climate-app-nayit-ruiz.netlify.app"
          className="weather-img"
          target="_blank"
        >
          <img src={weather} className="image-project" />
        </a>
      </div>
      <a href="/">
        <div className="return-circle"></div>
      </a>
      <p className="link-home-title">
        Go home, click in the red circle <br />
      </p>
    </div>
  );
};

export default Projects;
