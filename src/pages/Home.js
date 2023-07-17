import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import styles from '../styles/home.module.css'; 

const TITLE = "Home |" + Config.SITE_TITLE;
const DESC = "Portfolio of Cheryl Miller's web development projects.";
const CANONICAL = Config.SITE_DOMAIN + "/";
class Home extends React.Component{
    render() {
        return(
            <main>
              <div className= {styles["home-image"]}>
              <Helmet>
                <title>{TITLE}</title>
                <link rel="canonical" href={CANONICAL}/>
                <meta name="description" content= {DESC}/>
              </Helmet>
            <div className={styles["main-intro"]}>
              <h1>Cheryl<br></br>Miller<br/></h1>
              <p>A FIRE for learning and Creating!</p>
             {/* <!-- Todo use below code when i make a logo-->   */}
                {/* <!-- <a href="#">My Work</a> --> */}
            </div>
            <div className={styles["main-quotes"]}>
             <p>"“One of the strongest characteristics<br/> of genius is the power of lighting its own fire.” <br/> John Foster</p> 
             <p> “I am always doing that <br/> which I cannot do, in order <br/> that I may learn how to do it.”<br/>Pablo Picasso 
            </p>
            </div>
            </div>
          </main>
        );
    }
}

export default Home;

