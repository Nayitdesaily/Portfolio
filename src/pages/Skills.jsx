import { faBootstrap, faCss3, faGit, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import '../styles/skills.css'
import reduxSvg from '../assets/redux-logo.svg'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

   useEffect(() => {

      const tl = gsap.timeline()
      tl.fromTo('.my-skills-letters', { opacity: 0, y: '20%' }, { opacity: 1, duration: 1, y: 's0%' })
      tl.to('.my-skills-letters', { top: '2rem', scale: 0.5, ease: 'Circ.easeOut', duration: 1.5 })

      const st = gsap.timeline({
         scrollTrigger: {
            trigger: '.skills',
            scrub: true,
            start: 'top top',
            end: '+=20000 bottom',
            pin: true,
         }
      })

      st.to('.html-svg', { opacity: 1, duration: 3, x: '0%', rotate: '0deg' })
      st.to('.css-svg', { opacity: 1, duration: 3, y: '0%', rotate: '0deg' })
      st.to('.js-svg', { opacity: 1, duration: 3, y: '0%', rotate: '0deg' })
      st.to('.react-svg', { opacity: 1, duration: 3, y: '0%', rotate: '360deg' })
      st.to('.bootstrap-svg', { opacity: 1, duration: 3, y: '0%', rotate: '0deg' })
      st.to('.redux-svg', { opacity: 1, duration: 3, y: '0%', rotate: '360deg' })
      st.to('.git-svg', { opacity: 1, duration: 3, y: '0%', rotate: '0deg' })

      st.to('.git-svg', { opacity: 0, duration: 3, y: '0%', rotate: '0deg' })
      st.to('.redux-svg', { opacity: 0, duration: 3, y: '0%', rotate: '360deg' })
      st.to('.bootstrap-svg', { opacity: 0, duration: 3, y: '0%', rotate: '0deg' })
      st.to('.react-svg', { opacity: 0, duration: 3, y: '0%', rotate: '360deg' })
      st.to('.js-svg', { opacity: 0, duration: 3, y: '0%', rotate: '0deg' })
      st.to('.css-svg', { opacity: 0, duration: 3, y: '0%', rotate: '0deg' })
      st.to('.html-svg', { opacity: 0, duration: 3, x: '0%', rotate: '0deg' })

      st.to('.link-home', { opacity: 1, duration: 3 })

      gsap.to('.return', {
         scrollTrigger: {
            trigger: '.skills',
            scrub: true,
            start: 'top top',
            end: '+=20000 bottom',
            pin: true
         },
         bottom: '2rem',
         backgroundColor: 'red'
      })

      gsap.to('.scroll-down', {
         scrollTrigger: {
            trigger: '.skills',
            scrub: true,
            start: 'top top',
            end: '+=20000 bottom',
            pin: true
         },
         opacity: 0,
      })

      gsap.to('.arrow-down', {
         scrollTrigger: {
            trigger: '.skills',
            scrub: true,
            start: 'top top',
            end: '+=20000 bottom',
            pin: true
         },
         rotate: '180deg'
      })

   }, [])

   return (
      <div className='skills'>
         <h4 className='my-skills-letters'>My skills</h4>

         <div className='html-svg technology-svg'>
            <FontAwesomeIcon icon={faHtml5} /> <p>Html</p>
         </div>

         <div className='css-svg technology-svg'>
            <FontAwesomeIcon icon={faCss3} /> <p>Html</p>
         </div>

         <div className='js-svg technology-svg'>
            <FontAwesomeIcon icon={faJs} /> <p>Css</p>
         </div>

         <div className='react-svg technology-svg'>
            <FontAwesomeIcon icon={faReact} /> <p>Reacr</p>
         </div>

         <div className='bootstrap-svg technology-svg'>
            <FontAwesomeIcon icon={faBootstrap} /> <p>Bootstrap</p>
         </div>


         <div className='redux-svg technology-svg'>
            <img src={reduxSvg} /> <p>Redux</p>
         </div>


         <div className='git-svg technology-svg'>
            <FontAwesomeIcon icon={faGit} /> <p>Git</p>
         </div>

         <h4 className='scroll-down'>Scroll Down</h4>
         <FontAwesomeIcon icon={faArrowDown} className='arrow-down' />
         <a href="/"><div className='return'></div></a>
         <p className='link-home'>Go home, click in the red circle <br />or <br />Scroll Up</p>
      </div>
   );
};

export default Skills;