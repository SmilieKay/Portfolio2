import React from "react";
import styles from '../styles/resume.module.css'; 

class Resume extends React.Component {
    render() {
        return (
            <div className={styles.resume}>
                <h1>My Resume</h1>
                <p>Thank you for taking the time to learn more about me. Please click the button below to download my resume.</p>
                <a href="/Resume.pdf" download className={styles.downloadButton}>Download Resume</a>
            </div>
        );
    }
}

export default Resume;
