import React, { useState } from "react";
import './navbar.scss'


const Navbar = ({ navbarData }) => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const toggleHamburger = ()=>setShowHamburgerMenu(!showHamburgerMenu)
  return (
      <ul className="navbar-container">
        <li className="navbar-item">Images</li>
        <li className="navbar-item">Videos</li>
        <li className="navbar-item">Translate</li>
        <div className="navbar-right-container">
        <li className="navbar-item">sign in</li>
          <li className="navbar-item">rewards</li>
          <div className="HamburgerMenuContainer">
            <li className="navbar-item" onClick={toggleHamburger}>Hamburger-icon</li>
          {showHamburgerMenu &&
            <div className="hamburger-list-container">
               <ul className="hamburger-list">
              <li className="hamburger-item">Images</li>
             <li className="hamburger-item">Videos</li>
             <li className="hamburger-item">Translate</li>
            </ul>

            </div>
  }
          </div>
       
        </div>
    
      </ul>
    );
  };
  
  export default Navbar;