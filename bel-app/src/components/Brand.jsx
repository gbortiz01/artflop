import React from 'react';
import Logo from '../assets/Logo.jpg';

const brand = () => {
    return (
        <a className="navbar-brand" href="#"> 
        <img className='rounded-circle' height={70} width={70} src={Logo} alt="Logo" /> 
        </a>
    );
};

export default brand;