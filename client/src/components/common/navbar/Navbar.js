import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import logo from './images/logo.png';
import shoppingCartIcon from './images/shopping-cart-icon.png';
import './Navbar.css';

export const Navbar = (props) => {
  const { isAuthenticated } = useContext(AuthContext);

  const userSection = (
    <div className="user-section navbar-section">
      <Link to="/create">Create</Link>
      <Link to="/logout" className="logout-anchor">
        Logout
      </Link>
    </div>
  );

  const guestSection = (
    <div className="guest-section navbar-section">
      <Link to="/login">Log In</Link>
      <Link to="/register">Sign up</Link>
    </div>
  );

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img className="logo" src={logo} alt="No Logo" />

        <Link className="nav-bar-home-link" to="/">
          <p className="logo-text">
            <span className="white bold">DINOSAUR'S</span>{' '}
            <span className="gray">AUCTION</span>
          </p>
        </Link>
      </div>
      <div className="right-section">
        <Link to="/catalog">Catalog</Link>
        {isAuthenticated ? userSection : guestSection}
        <Link to="/cart" className="shopping-cart-container">
          <img
            className="shopping-cart-icon"
            alt="Shopping Cart"
            src={shoppingCartIcon}></img>
          <p className="shopping-cart-item-count">3</p>
        </Link>
      </div>
    </nav>
  );
};
