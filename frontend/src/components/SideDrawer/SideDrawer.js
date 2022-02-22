import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

function SideDrawer({ show, click }) {
  const sideDrawerClass = ["sidedrawer"];
  if (show) sideDrawerClass.push("show");
  //sidedrawer show || sidedrawer
  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/cart">
            <box-icon
              type="solid"
              name="cart"
              color="#fcf7ff"
              size="sm"
            ></box-icon>
            <span>
              Cart <span className="sidedrawer__cartbadge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideDrawer;
