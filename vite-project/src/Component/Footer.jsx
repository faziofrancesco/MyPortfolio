// Footer.js
import React from "react";
import './Footer.css';
import './styles.css'
const Footer = ({ language }) => {
    const translations = {
        it: "Tutti i diritti riservati - Fazio Francesco",
        en: "All rights reserved - Fazio Francesco",
        jp: "すべての権利予約 - ファツィオ フランチェスコ"
    };

    return (
        <footer className="App-footer">
            <p>{translations[language]}</p>
        </footer>
    );
};

export default Footer;
