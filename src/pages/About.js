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
      <main className="main-other-pages">
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
       <h2 className ={styles["main-intro"]}>Cheryl K. Miller </h2>
       <p>I would like to take a moment to introduce myself and let you know more about me. I am 43 years old with a strong drive to exceed expectations, I have always had a drive for learning  and I pick up on new skills very quickly. I have a long work history in the medical field that I feel gives me a well rounded ability to work in a wide variety of environments and with a broad array of people.   I recently graduated from a Full stack web development bootcamp through Washington University where I learned a variety of skills. Some of the skills I learned durring bootcamp are HTML, CSS, Git, JavaScript , Bootstrap, The DOM, APIs, JQuery, JSON, AJAX, Node, ES6, Object-oriented programming, Express, MySQL, MVC paradigm, Sequelize, Testing, Agile development, Progressive Web, Apps, React, NoSQL, MERN Stack, and Computer Science fundamentals.  All of this is done in a fast paced environment that encourages the ability to work in groups or individually.  
 Feel free to contact me to learn more about me.</p>
      
       </div></div>
      </section>
      </main>
      );
}
}

export default About;
