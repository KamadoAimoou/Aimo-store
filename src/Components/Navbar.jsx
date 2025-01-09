import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo-cute.png";
import "../Styles/Navbar.css";

function Navbar() {
  const [isSearchActive, setSearchActive] = useState(false);

  const toggleSearch = () => {
    setSearchActive(!isSearchActive);
  };

  return (
    <div className="navbar-container">
      {/* Логотип */}
      <div className="logo-navbar">
        <img src={logo} alt="logo of Aimo store" className="logo-img" />
        <span className="logo-text">
          <h1>Aimo store</h1>
        </span>
      </div>

      {/* Ссылки навигации */}
      <div className="left-navbar">
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Man">Man</Link>
          </li>
          <li>
            <Link to="/Woman">Woman</Link>
          </li>
          <li>
            <Link to="/Favorite">Favorite</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Поиск */}
      <div className="search-container">
        <button className="search-icon" onClick={toggleSearch}>
          🔎
        </button>
        <input
          type="text"
          placeholder="Search..."
          className={`search-input ${isSearchActive ? "active" : ""}`}
        />
      </div>

      {/* Правый блок */}
      <div className="right-navbar">
        <ul className="navbar-links">
          <li>
            <Link to="/login">Sign in</Link>
          </li>
          <li>
            <Link to="/Register">Log in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
