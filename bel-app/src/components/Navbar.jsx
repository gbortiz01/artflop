import React from 'react';
import Brand from './Brand';
import MenuButton from './Menubutton'; 
import CategoryItem from './CategoryItem';
import { NavLink, useLocation } from 'react-router-dom';
import CartWidget from './Cartwidget';

const Navbar = () => {
  const location = useLocation(); 

  return (
    <nav className="navbar navbar-expand-lg BgNavbar">
      <div className="container-fluid">
        <Brand as={NavLink} to="/ArtFlop" />
        <MenuButton />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/category/mates" className="nav-link">
                <CategoryItem name="Mates" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/llaveros" className="nav-link">
                <CategoryItem name="Llaveros" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/cuadros" className="nav-link">
                <CategoryItem name="Cuadros" />
              </NavLink>
            </li>
            {location.pathname !== "/cart" && <CartWidget/>} 
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




