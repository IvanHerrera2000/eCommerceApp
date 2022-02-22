import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "boxicons";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav__logo">
        <Link to="/">eCommerce</Link>
      </div>

      <ul className="nav__links">
        <li>
          <Link to="/cart" className="cart__link">
            <box-icon type="solid" name="cart" color="#fcf7ff"></box-icon>
            <span>
              Cart
              <span className="cartlogo__badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      <box-icon
        name="menu"
        color="#fcf7ff"
        class="hamburger__menu"
        size="lg"
      ></box-icon>
    </nav>
  );
}

export default Navbar;
