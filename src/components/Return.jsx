import React, { useEffect } from 'react';
import '../styles/returnHome.css'
import { useNavigate } from 'react-router-dom'

const Return = () => {

    const navigate = useNavigate()

    return (
        <div>
            <div className='first-circle' onClick={() => navigate('/')}><span> </span></div>
        </div>

    );
};

export default Return;