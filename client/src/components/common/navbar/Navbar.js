import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import shoppingCartIcon from './images/shopping-cart-icon.png';
import './Navbar.css';

export const Navbar = (props) => {
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
      {/* <div className="hamburger-menu-container">
        <img
          className="hamburger-menu-icon"
          src={hamburgerIcon}
          alt="No Menu"
        />
      </div> */}
      <div className="right-section">
        <Link to="/catalog">Catalog</Link>
        <div className="guest-section navbar-section">
          <Link to="/login">Log In</Link>
          <Link to="/register">Sign up</Link>
        </div>
        <div className="user-section navbar-section">
          <Link to="/create">Create</Link>
          <a className="logout-anchor">Logout</a>

          <Link to={'/cart'} className="shopping-cart-container">
            <img
              className="shopping-cart-icon"
              alt="Shopping Cart"
              src={shoppingCartIcon}></img>
            <p className="shopping-cart-item-count">3</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};
