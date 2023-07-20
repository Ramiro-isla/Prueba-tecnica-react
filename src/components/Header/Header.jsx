import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <nav>
        <ul>
          <li>
            <Link to="/">React Cats</Link>
          </li>
          <li>
            <Link to="/fizzBuzz">FizzBuzz</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;