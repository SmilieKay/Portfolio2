
import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";
import styles from "../styles/contact.module.css"

const TITLE = "Contact Me | " + Config.SITE_TITLE;
const DESC = "Contact Cheryl Miller.";
const CANONICAL = Config.SITE_DOMAIN + "/";
 
class Contact extends React.Component{
  render(){
    return(
      <main className="main-other-pages">
        <div className={styles['content-container']}>
          <Helmet>
            <title>{TITLE}</title>
            <link rel="canonical" href={CANONICAL}/>
            <meta name="dexcription" content={DESC}/>
          </Helmet>
          <div className={styles["title-container"]}>
            <h2>Contact Me</h2>
            <p>If you would like to learn more about me and what I can contribute to your company please contact me and arrange a meeting.</p>
          </div>
          <form className={styles["form-container"]} action="https://formsubmit.co/0bd2d5d0faa9f1ba29e29b49abfc932d" method="POST">
        <input type="text" name="name" placeholder="Name" required/>
        <input type="email" name="email" placeholder="Email Address" required/>
        <input type="hidden" name="_subject" value="Someone messaged you from your Portfolio!"/>
        {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"/> */}
     <input type="text" name="message" placeholder="Your Message here " required/>
   
     <button type="submit">Send</button>
</form>
        </div>
      </main>
    );
  }

}

export default Contact;
