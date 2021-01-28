import React from 'react';
import { Link } from '../../routes';

const Header = () => (
  <div>
    <Link route="/">
      <a className="header-nav">Home</a>
    </Link>
    <Link route="/about-us/6">
      <a className="header-nav">About</a>
    </Link>
    <Link route="/counter">
      <a className="header-nav">Counter</a>
    </Link>
    <Link route="/contact-us">
      <a className="header-nav">Contact Us</a>
    </Link>
  </div>
);

export default Header;
