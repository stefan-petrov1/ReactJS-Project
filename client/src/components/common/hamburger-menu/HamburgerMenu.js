import { useContext } from 'react';
import { elastic as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import './HamburgerMenu.css';

export const HamburgerMenu = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const userSection = (
    <>
      <Link className="bm-item menu-item" to="/catalog">
        Catalog
      </Link>

      <Link className="bm-item menu-item" to="/create">
        Create
      </Link>
      <Link className="bm-item menu-item" to="/logout">
        Logout
      </Link>
    </>
  );

  const guestSection = (
    <>
      <Link className="bm-item menu-item" to="/login">
        Login
      </Link>
      <Link className="bm-item menu-item" to="/register">
        Sign in
      </Link>
    </>
  );

  const sectionSeparator = (
    <>
      <div className="bm-section-separator" />
    </>
  );

  return (
    <Menu right disableCloseOnEsc className="hamburger-menu">
      <Link className="bm-item menu-item" to="/">
        Home
      </Link>
      <Link className="bm-item menu-item" to="/cart">
        Cart
      </Link>
      {sectionSeparator}
      {isAuthenticated ? userSection : guestSection}
    </Menu>
  );
};
