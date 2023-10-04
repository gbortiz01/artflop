
import Brand from './Brand'
import MenuButton from './Menubutton'
import CategoryItem from './CategoryItem'
import {NavLink} from 'react-router-dom'


const Navbar = () => {

    return (
      
        <nav className="navbar navbar-expand-lg BgNavbar">
        <div className="container-fluid">
          <Brand as={NavLink} to='/'/>
          <MenuButton />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" as={NavLink} to='/'><CategoryItem to="/" name="Todos Productos" /> </li>
            <li className="nav-item" as={NavLink} to='/category/mates'> <CategoryItem to="/mate"  name="Mates" /></li>
            <li className="nav-item" as={NavLink} to='/category/llaveros'>  <CategoryItem to="/llavero"  name="Llaveros"/> </li>
            <li className="nav-item" as={NavLink} to='/category/cuadros'> <CategoryItem to="/cuadro" name="Cuadros"/> </li>
            </ul>
          </div> 
        </div>
      </nav>
    );
};

export default Navbar;

