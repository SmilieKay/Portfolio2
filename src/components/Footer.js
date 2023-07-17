import React from "react";
import {Link } from "react-router-dom";
import styles from "../styles/footer.module.css";


class Footer extends React.Component {
    render(){
        return(
          <footer className={styles["footer-main"]}>
         <div className={`${styles["wrapper-main"]} ${styles["footer-main-flex"]}`}>
         <p className={styles["footer-p"]}>If you have any questions about my work or me please<br/> do not hesitate to contact me to arrange a short meeting. </p>
          <Link to="/contact" className={styles["footer-getintouch"]}>Contact Me</Link>
         
      </div>
      </footer>);
    }
}

export default Footer;
