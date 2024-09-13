// Header.js
import React from "react";
import './Header.css'; // Stile specifico per il componente Header
import './styles.css'

const Header = ({ language, onLanguageChange }) => {
    const translations = {
        it: "Fazio Francesco",
        en: "Fazio Francesco",
        jp: "ファツィオ フランチェスコ"
    };

    return (
        <header className="App-header">
            <h1>{translations[language]}</h1>
            <div className="language-switch">
                <button onClick={() => onLanguageChange("it")} className={language === "it" ? "active" : ""}>
                    Italiano
                </button>
                <button onClick={() => onLanguageChange("en")} className={language === "en" ? "active" : ""}>
                    English
                </button>
                <button onClick={() => onLanguageChange("jp")} className={language === "jp" ? "active" : ""}>
                    日本語
                </button>
            </div>
        </header>
    );
};

export default Header;
