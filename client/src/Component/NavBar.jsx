import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

const NavBar = () => {
  return (
    <section className="homeBanner">
      <div className="Heading">
        <h1>Slice Overflow</h1>
        <ul className="Nav">
          <li>Home</li>
          <li>Menu</li>
          <li>
            <Link to="/loginSignup">Login or Signup</Link>
          </li>
          <li>Checkout</li>
        </ul>
      </div>
    </section>
  );
};

export default NavBar;
