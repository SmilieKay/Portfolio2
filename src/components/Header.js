import React from "react";
import {NavLink, Link} from "react-router-dom";
import styles from "../styles/header.module.css";
class Header extends React.Component {
    render() {
        return(
          <header className={styles["header-main"]}>
            {/* <!--use below code if I want to add a logo */}
             {/* <div class="header-main-logo">-->  */}
               
             <nav className={styles["header-main-nav"]}>
                 <ul>
                
                   <li><NavLink to="/" caseSensitive activeclassname="active">Home</NavLink></li>
                   <li><NavLink to="/about" activeclassname="active">About Me</NavLink></li>
                   <li><NavLink to="/projects" activeclassname="active">Portfolio</NavLink></li>
                   <li><NavLink to="/contact" activeclassname="active">Contact Me</NavLink></li>
                   <li><NavLink to="/resume" activeclassname="active">Resume</NavLink></li>
                 </ul>
               </nav>
                 
             
       
               <div className={styles["header-main-sm"]}>
              <a href="https://www.facebook.com/cheryl.rollings.58" target="_blank" rel="noopener noreferrer">    <div className={styles["header-main-sm-fb"]}></div></a>
              <a href="https://github.com/SmilieKay?tab=repositories" target="_blank" rel="noopener noreferrer"><div className={styles["header-main-sm-github"]}></div></a> 
            <Link to="/contact"><div className={styles["header-main-sm-email"]}></div></Link>
            
            <div className={styles["burger-menu-btn"]}></div>
             </div>
           </header>
        );
    }
}

export default Header;


