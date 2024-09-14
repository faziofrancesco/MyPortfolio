import React from "react";
import './About.css';
import './styles.css';
import { translations } from '../data';

const About = ({ language }) => {
    const { aboutTitle, aboutText } = translations[language] || {};

    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-text">
                    <h2>{aboutTitle}</h2>
                    <p>{aboutText}</p>
                </div>
                <div className="about-image">
                    <img src="myPicture.jpeg" alt="About Me" />
                </div>
            </div>
        </section>
    );
};

export default About;
