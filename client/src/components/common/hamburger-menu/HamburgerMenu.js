import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

export const HamburgerMenu = (props) => {
  return (
    <Menu right disableCloseOnEsc className="hamburger-menu" {...props}>
      <Link className="menu-item" to="/">
        Home
      </Link>
      <Link className="menu-item" to="/catalog">
        Catalog
      </Link>
      <Link className="menu-item" to="/login">
        Login
      </Link>
      <Link className="menu-item" to="/register">
        Sign in
      </Link>
      <Link className="menu-item" to="/create">
        Create
      </Link>
      <Link className="menu-item" to="/logout">
        Logout
      </Link>
      <Link className="menu-item" to="/cart">
        Cart
      </Link>
    </Menu>
  );
};
