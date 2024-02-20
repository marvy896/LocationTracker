import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/register" className="nav-link" activeClassName="active">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
