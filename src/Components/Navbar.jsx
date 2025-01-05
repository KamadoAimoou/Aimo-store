import React from "react";
import { Link } from 'react-router-dom';
import logo from '../logo-cute.png';
import "../Styles/Navbar.css"


function Navbar () {
    return(

        <div className="navbar-container">
            <div className="logo-navbar">
                <img src={logo} alt="logo of Aimo store" 


                className="logo-img"
                />
                <span className="logo-text"><h1>Aimo store</h1></span>

            </div>

            <div className="left-navbar">
                <ul className="navbar-links">
                    <li><Link to="/">     Home    </Link>     </li>
                    <li><Link to="/Man" >  Man     </Link>     </li>
                    <li><Link to="/Woman"> Woman   </Link>      </li>
                    <li><Link>Favorite</Link></li>
                    <li><Link to="/Contact">Contact </Link>      </li>
                </ul>

            </div>

          

            <div className="search-container">
                <input
                type="text"
                placeholder="Search..."
                className="search-input"
                />

                  <div className="right-navbar">
                        <ul className="navbar-links">
                            <li><Link to="/login">Sign in</Link></li>
                            <li><Link to="/Register">Log in</Link></li>
                        </ul>
                </div>
            </div>

        </div>
    );


}
export default Navbar;