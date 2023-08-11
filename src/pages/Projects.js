import React from "react";

import { Helmet } from "react-helmet";
import Config from "../Config.json";
import styles from "../styles/projects.module.css";
import quizImage from '../images/Quiz.png';
import tailgateImage from '../images/Tailgate.png';
import parksImage from '../images/parks.png';
import STLPets from '../images/stl-pets.png';
import plannerImage from '../images/Schedular.png';
import weatherImage from '../images/Weather.png';

const TITLE = "My Projects |" + Config.SITE_TITLE;
const DESC = "Cheryl Miller's Projects.";
const CANONICAL = Config.SITE_DOMAIN + "/";


class Projects extends React.Component {
  render() {
    return (
      <main  className={styles["project-main"]}>
           <Helmet>
                <title>{TITLE}</title>
                <link rel="canonical" href={CANONICAL}/>
                <meta name="description" content= {DESC}/>
              </Helmet>
      <div id="Projects">
        <section className={styles["index-category"]}>
          <p className={styles["index-category-title"]}> My Projects </p>
         
          <div className={styles["index-category-box"]}>
            <a href="https://smiliekay.github.io/Tron-Themed-JavaScript-Quiz/" className={styles["index-category-link"]}>
            <img src={quizImage}  alt="Quiz "/>
              <div className={styles["dark-overlay"]}>
                <p className={styles["index-category-description"]}>This is a JavaScript quiz that I designed and built. I used dynamically updated HTML, CSS, and JavaScript to build it. I ultalized local storage to allow you to save your scores. Click on this image and test your knowledge and see if you can win the special BONUS high score! </p>
              </div>
              
            </a>
          </div>

          <div className={styles["index-category-box"]}>
            <a href="https://saint-louis-pets-554-d862dc3f7739.herokuapp.com/" className={styles["index-category-link"]}>
            <img src={STLPets}  alt="Dog and cat and stl pets logo "/>
              <div className={styles["dark-overlay"]}>
                <p className={styles["index-category-description"]}>This is my 3rd  group project to make a petfinder website that uses react for the front end, GraphQL with a Node.js and Express.js serve, MongoDB, and the Mongoose ODM for the database it uses queries and mutations for retrieving, adding updating and deleting data and has authentication. </p>
              </div>
              
            </a>
          </div>

          <div className={styles["index-category-box"]}>
            <a href="https://smiliekay.github.io/Blown-Away-weather/" className={styles["index-category-link"]}>
            <img src={weatherImage}  alt="Weather app "/>
              <div className={styles["dark-overlay"]}>
                <p className={styles["index-category-description"]}>You can put in your city and get the 5-day forecast. It was my first time using an API and a wonderful learning experience! You can click on this image to be taken to the launched page and see it in action.</p>
              </div>
             
            </a>
          </div>

          <div className={styles["index-category-box"]}>
            <a href="https://smiliekay.github.io/Daily-Planner/" className={styles["index-category-link"]}>
            <img src={plannerImage}  alt="planner app "/>
              <div className={styles["dark-overlay"]}>
                <p className={styles["index-category-description"]}>I designed this planner for someone working 12-hour shifts and used 24-hour time but also for those that work night shift as well so I allowed for 24-hour scheduling. You can click on this image to be taken to the launched page and see it in action. </p>
              </div>
              
            </a>
          </div>

          <div className={styles["index-category-box"]}>
            <a href="https://github.com/SmilieKay/BattleHawksTailgate" className={styles["index-category-link"]}>
            <img src={tailgateImage}  alt="Tailgate planner"/>
              <div className={styles["dark-overlay"]}>
                <p className={styles["index-category-description"]}>This was a group project that I was a part of, fans of the St. Louis BattleHawks can use to help plan their tailgate parties for future games. This site is not launched at this time but you can click on this image to be taken to my GitHub Repo and see the code design we came up with. </p>
              </div>
              
            </a>
          </div>

          <div className={styles["index-category-box"]}>
            <a href="https://github.com/SmilieKay/ParkQuest" className={styles["index-category-link"]}>
            <img src={parksImage}  alt="Park Quest"/>
              <div className={styles["dark-overlay"]}>
                <p className={styles["index-category-description"]}>This was another group project that allows users to look for National parks in a selected state and to see the weather in the parks area.
                This site is not launched at this time but you can click on this image to be taken to my GitHub Repo and see the code design we came up with.</p>
              </div>
              
            </a>
          </div>
          
         
        </section>
      </div>
      
      </main>
    );
  }
}

export default Projects;
