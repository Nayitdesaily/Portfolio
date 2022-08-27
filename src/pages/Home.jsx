import React, { useEffect, useState } from 'react';
import '../styles/home.css'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap';

const Home = () => {

   const [welcomePhrase, setWelcomePhrase] = useState("Hi, I'm")
   const [firstName, setFirstName] = useState("Nayit")
   const [secondName, setSecondName] = useState("Desaily")

   const navigate = useNavigate()

   useEffect(() => {
      gsap.fromTo('.container-presentation',
         { y: '20px' },
         {
            duration: 1, y: '0px',
            boxShadow: ['blue 0px 0px 0px 2px inset',
               'rgb(255, 255, 255) 10px -10px 0px -3px',
               'rgb(255, 0, 0) 10px -10px', 'rgb(255, 255, 255) 20px -20px 0px -3px',
               'rgb(255, 213, 0) 20px -20px', 'rgb(255, 255, 255) 30px -30px 0px -3px',
               'rgb(0, 225, 255) 30px -30px',
               'rgb(255, 255, 255) 40px -40px 0px -3px',
               'rgb(0, 0, 0) 40px -40px']
         })
   }, [])

   useEffect(() => {
      gsap.fromTo('.presentation',
         { opacity: 0, y: '20px' },
         { opacity: 1, duration: 0.6, y: '0px', })
   }, [welcomePhrase])

   useEffect(() => {
      gsap.fromTo('.firstname',
         { opacity: 0, y: '20px' }, { opacity: 1, duration: 0.6, y: '0px' })
   }, [firstName])

   useEffect(() => {
      gsap.fromTo('.secondname',
         { opacity: 0, y: '20px' }, { opacity: 1, duration: 0.6, y: '0px' })
   }, [secondName])

   return (
      <div className='home'>
         <div className='container-presentation'>
            <h1
               className='presentation'
               onMouseOver={() => (setWelcomePhrase("About"))}
               onMouseOut={() => (setWelcomePhrase("Hi, I'm"))}
               onClick={() => navigate('/about')}>{welcomePhrase}</h1>

            <h1
               className='firstname'
               onMouseOver={() => (setFirstName("Skills"))}
               onMouseOut={() => (setFirstName("Nayit"))}
               onClick={() => navigate('/skills')}>{firstName}</h1>

            <h1
               className='secondname'
               onMouseOver={() => (setSecondName("Projects"))}
               onMouseOut={() => (setSecondName("Desaily"))}
               onClick={() => navigate('/projects')}>{secondName}</h1>
         </div>
      </div >
   );
};

export default Home;

