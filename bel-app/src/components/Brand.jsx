import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.jpg';

const Brand = () => {
  return (
    <NavLink className="navbar-brand" to="/ArtFlop">
      <img className='rounded-circle' height={70} width={70} src={Logo} alt="Logo" />
    </NavLink>
  );
};

export default Brand;
