
import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "../styles/header.module.css";
const Header = () => {
  return (
    <header className={styles["header-main"]}>
      <nav className={styles["header-main-nav"]}>
        <ul>
          <li>
            <NavLink exact to="/" >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" >
              Contact Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" >
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

        
      </div>
    </header>
  );
};

export default Header;
