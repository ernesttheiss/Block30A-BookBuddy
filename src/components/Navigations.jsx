<<<<<<< HEAD
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
=======
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </div>
    );
  };
  
  export default NavBar;
>>>>>>> 8f83ee3e618b3ec84a9dc813227825172a7a77d0
