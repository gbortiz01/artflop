
import Brand from './Brand'
import MenuButton from './Menubutton'
import CategoryItem from './CategoryItem'
import CartContiner from './CartContainer'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg BgNavbar">
        <div className="container-fluid">
          <Brand />
          <MenuButton />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
          <CategoryItem isActive={true} name="Nosotras"/>
              </li>
              <li className="nav-item">
          <CategoryItem isActive={false} name="Mates"/>
              </li>
              <li className="nav-item">
          <CategoryItem isActive={false} name="Cuadros"/>
              </li>
              <li className="nav-item">
          <CategoryItem isActive={false} name="Ustedes"/>
              </li>
            </ul>
          </div>
          <CartContiner/>
        </div>
      </nav>

    );
};

export default Navbar;