import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "boxicons";

function Navbar({ click }) {
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
      <div class="hamburger__menu" onClick={click}>
        <box-icon name="menu" color="#fcf7ff" size="lg"></box-icon>
      </div>
    </nav>
  );
}

export default Navbar;
