import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/about.module.css"
import imageSrc from '../images/me-brown-hair.jpg';

import { Helmet } from "react-helmet";
import Config from "../Config.json";

const TITLE = "About |" + Config.SITE_TITLE;
const DESC = "About Me.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class About extends React.Component{
render() {
    return(
      <main>
         <Helmet>
                <title>{TITLE}</title>
                <link rel="canonical" href={CANONICAL}/>
                <meta name="description" content= {DESC}/>
              </Helmet>
        <section className ={styles["index-about"]}>
        <div id="About"></div>
        <div className ={styles["index-about-flex"]}> 
        <div className ={styles["index-about-img"]}>
        <img src={imageSrc} alt="Cheryl Miller"/></div>
        <div className ={styles["index-about-text"]}>
       <h2>A Little Bit About Me</h2>
       <p>I would like to take a moment to introduce myself and let you know more about me. I have worked in the medical field for over 20 years. I believe that background in medical gives many skills that make me a better employee. I have always loved problem solving and creative thinking combined with a strong desire to learn. My desire to learn and puzzle/problem solving is what sparked my desire to learn about computer coding and web design. It provides the challenge of puzzle solving and the opportunity to be artistic and create new things. Web Design/Coding fuels my fire for learning and creating. Feel free to contact me to learn more about me.</p>
      
       </div></div>
      </section>
      </main>
      );
}
}

export default About;
