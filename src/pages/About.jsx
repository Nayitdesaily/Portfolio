import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import '../styles/about.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about',
        scrub: true,
        start: 'top top',
        end: '+=8000',
        pin: true,
      },
    });

    gsap.fromTo(
      '.scroll-down',
      { opacity: 0, x: '-100%' },
      { opacity: 1, x: '50%', ease: 'bounce.out', duration: 2 }
    );

    gsap.to('.arrow-down', {
      scrollTrigger: {
        trigger: '.about',
        scrub: true,
        pin: true,
        start: 'top top',
        end: '+=8000',
      },
      rotate: 180,
      right: '2rem',
      duration: 3,
    });

    tl.to('.scroll-down', {
      scale: 0,
      duration: 3,
    });

    tl.to('.title', {
      opacity: 1,
      duration: 3,
    });

    tl.to('.return', {
      right: '1rem',
      borderRadius: 50,
      backgroundColor: 'blue',
      duration: 3,
    });

    tl.to('.title', {
      x: '-100%',
      scale: 0,
      opacity: 0,
      duration: 3,
    });

    tl.to('.arrow-down', {
      rotate: 180,
      duration: 3,
    });

    tl.to('.information-sec1', {
      opacity: 1,
      top: '50%',
      duration: 3,
    });

    tl.to('.information-sec1', {
      scale: 0,
      opacity: 0,
      duration: 3,
    });

    tl.to('.information-sec2', {
      opacity: 1,
      top: '50%',
      duration: 3,
    });

    tl.to('.information-sec2', {
      scale: 0,
      opacity: 0,
      duration: 3,
    });

    tl.to('.guide', {
      opacity: 1,
      duration: 3,
      bottom: '50%',
      letterSpacing: 0,
    });
  }, []);

  return (
    <div className="about">
      <h3 className="title">I am FrontEnd Developer</h3>
      <div className="information-sec1">
        <h4 className="about-title">About</h4>
        <p className="principal-information-about-me">
          I'm Mechanic Engineer and passionated about technology.
          <br />
          I'm 24 years old from Chimbote, Perú.
        </p>
      </div>
      <p className="information-sec2">
        I am a frontend web developer with good communication skills. I do love
        work in other people and keep learning about this amazing and new world.
      </p>
      <FontAwesomeIcon icon={faArrowDown} className="arrow-down" />
      <a href="/">
        <div className="return"></div>
      </a>
      <h4 className="scroll-down">Scroll Down</h4>
      <h4 className="guide">
        Go home, click in the blue circle <br /> or <br /> Scroll up to repeat
      </h4>
    </div>
  );
};

export default About;
