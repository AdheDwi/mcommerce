import React from "react";
import { Link } from "../routes";

const Menu = () => (
  <div className="menu-list">
    <Link href="/">
      <a className="menu active">
        <i className="fa fa-home" aria-hidden="true"></i>
        <span>Home</span>
      </a>
    </Link>
    <Link href="/wishlist">
      <a className="menu">
        <i className="fa fa-heart" aria-hidden="true"></i>
        <span>Wishlist</span>
      </a>
    </Link>
    <Link href="/cart">
      <a className="menu">
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        <span>Cart</span>
      </a>
    </Link>
    <Link href="/">
      <a className="menu">
        <i className="fa fa-sign-out" aria-hidden="true"></i>
        <span>Logout</span>
      </a>
    </Link>
  </div>
);

export default Menu;
