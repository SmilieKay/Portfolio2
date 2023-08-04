
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
const Header = () => {
  return (
    <header className={styles["header-main"]}>
      <div className={styles["header-main-nav"]}>
        <Navigation/>
       <MobileNavigation/>
      </div>

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
