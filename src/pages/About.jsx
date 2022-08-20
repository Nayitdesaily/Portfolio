import React, { useEffect } from 'react';
import Return from '../components/Return';
import gsap from 'gsap';
import '../styles/about.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const About = () => {

   useEffect(() => {
      const tl = gsap.timeline()
      const titlePage = document.querySelector(".title-page")
      const principalInformation = document.querySelector(".principal-information-about-me")
      const aboutTitle = document.querySelector(".about-title")
      const returnCircle = document.querySelector('.first-circle')
      
      const tlScrollTrigger = gsap.timeline({
         scrollTrigger: {
            trigger: '.about',
            pin: true,
            markers: true,
            start: 'top top',
            end: '100% 100%',
         }
      })

      tl.fromTo(titlePage,
         { opacity: 0, y: -100 },
         { opacity: 1, y: 0, duration: 1.5})

         .fromTo(returnCircle, 
            {opacity:0, y: 100},
            {opacity: 1, y:0, duration: 1})

      
   }, [])

   return (
      <div className='about'>
         <div className='main-information'>
            <h3 className='title-page'>I am FrontEnd Developer</h3>
         </div>

         <div className='about-me'>
            <div>
               <h4 className='about-title'>About</h4>
               <p className='principal-information-about-me'>
                  Hello. I'm Nayit. I'm Mechanic Engineer and passionated <br />
                  about technology. I specialize in building on software development <br />
                  and website that give to the clients the journey they are seeking
               </p>
            </div>
         </div>
         <Return />
      </div>
   );
};

export default About;