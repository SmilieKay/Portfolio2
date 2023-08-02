
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "../styles/header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen); 
  };
  
  return (
    <header className={styles["header-main"]}>
      <nav className={styles["header-main-nav"]}>
        <ul className={isMenuOpen ? `${styles["burger-menu"]}` : ""}>
          <li>
            <NavLink exact to="/" onClick={handleMenuToggle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleMenuToggle}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={handleMenuToggle}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleMenuToggle}>
              Contact Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" onClick={handleMenuToggle}>
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles["header-main-sm"]}>
        <a href="https://www.facebook.com/cheryl.rollings.58" target="_blank" rel="noopener noreferrer">
          <div className={styles["header-main-sm-fb"]}></div>
        </a>
        <a href="https://github.com/SmilieKay?tab=repositories" target="_blank" rel="noopener noreferrer">
          <div className={styles["header-main-sm-github"]}></div>
        </a>
        <Link to="/contact">
          <div className={styles["header-main-sm-email"]}></div>
        </Link>

        {/* Burger menu icon */}
        <div className={styles["burger-menu-btn"]} onClick={handleMenuToggle}></div>
      </div>
    </header>
  );
};

export default Header;
