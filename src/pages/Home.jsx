import React, { useState } from 'react';
import '../styles/home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const [ welcomePhrase, setWelcomePhrase ] = useState("Hi, I'm")
    const [firstName, setFirstName] = useState("Nayit")
    const [secondName, setSecondName] = useState("Desaily")

    const navigate = useNavigate()


    return (
        <div className='home'>
            <div>
                <h1
                className='firstname'
                onMouseOver={() => (setWelcomePhrase("About"))}
                onMouseOut={() => (setWelcomePhrase("Hi, I'm"))}
                onClick={() => navigate('/about')}>{welcomePhrase}</h1>

                <h1 
                className='firstname'
                onMouseOver={() => (setFirstName("Skills"))}
                onMouseOut={() => (setFirstName("Nayit"))}
                onClick={() => navigate('/about')}>{firstName}</h1>

                <h1
                className='secondname'
                onMouseOver={() => (setSecondName("Projects"))}
                onMouseOut={() => (setSecondName("Desaily"))}
                onClick={() => navigate('/about')}>{secondName}</h1>
            </div>
        </div>
    );
};

export default Home;

