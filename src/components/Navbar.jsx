import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
      <nav>
        <NavLink 
          to="/export"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Export
        </NavLink>
        <NavLink 
          to="/"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          HorrorHub
        </NavLink>
        <NavLink 
          to="/favorites"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Favorites
        </NavLink>
      </nav>
    );
  }
  
  export default Navbar;