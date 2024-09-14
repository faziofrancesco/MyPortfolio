import React from "react";
import './Footer.css';
import './styles.css';
import { contactInfo } from '../data'; // Importa il file data

const Footer = ({ language }) => {
    const translations = {
        it: "Tutti i diritti riservati - Fazio Francesco",
        en: "All rights reserved - Fazio Francesco",
        jp: "すべての権利予約 - ファツィオ フランチェスコ"
    };

    const { email, cv, github, emailLink, cvLink, githubLink } = contactInfo[language] || {};

    return (
        <footer className="App-footer">
            <div className="footer-content">
                <p>{translations[language]}</p>
                <div className="footer-links">
                    <a href={`mailto:${emailLink}`} className="footer-link">
                        <i className="fas fa-envelope"></i> {email}
                    </a>
                    <a href={cvLink} className="footer-link" download>
                        <i className="fas fa-file-pdf"></i> {cv}
                    </a>
                    <a href={githubLink} className="footer-link" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i> {github}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
