import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active-nav-link" end>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/register" className="nav-link" activeClassName="active-nav-link">
            Register
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/books" className="nav-link" activeClassName="active-nav-link">
            Books
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/account" className="nav-link" activeClassName="active-nav-link">
            Account
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
