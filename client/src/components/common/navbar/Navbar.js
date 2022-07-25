import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img className="logo" src="images/logo.png" alt="No Logo" />

        <Link className="nav-bar-home-link" to="/">
          <p className="logo-text">
            <span className="white bold">DINOSAUR'S</span>{' '}
            <span className="gray">AUCTION</span>
          </p>
        </Link>
      </div>
      <div className="hamburger-menu-container">
        <img
          className="hamburger-menu-icon"
          src="images/Hamburger_icon.svg.png"
          alt="No Menu"
        />
      </div>
      <div className="right-section">
        <Link to="/catalog">Catalog</Link>
        <div className="guest-section navbar-section">
          <Link to="/login">Log In</Link>
          <Link to="/register">Sign up</Link>
        </div>
        <div className="user-section navbar-section">
          <Link to="/profile">Profile</Link>
          <a className="logout-anchor">Logout</a>
        </div>
      </div>
    </nav>
  );
};
