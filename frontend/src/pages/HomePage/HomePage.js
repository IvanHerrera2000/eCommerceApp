import React from "react";
import Product from "../../components/Product/Product";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Lastest Products</h2>
      <div className="homescreen__products">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default HomePage;
