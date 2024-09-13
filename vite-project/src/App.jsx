// App.js
import React, { useState } from "react";
import './App.css'; // File vuoto o con stile globale
import Header from './Component/Header.jsx';
import About from './Component/About.jsx';
import Footer from './Component/Footer.jsx';
import Portfolio from "./Component/Portfolio.jsx";
import Skills from "./Component/Skills.jsx";

function App() {
    const [language, setLanguage] = useState("it"); // Lingua predefinita

    const handleLanguageChange = (lang) => {
        setLanguage(lang); // Cambia la lingua globalmente
    };

    return (
        <div className="App">
            {/* Header con il selettore di lingua */}
            <Header language={language} onLanguageChange={handleLanguageChange} />

            {/* Sezione About */}
            <About language={language} />
            <Skills language={language} />
            <Portfolio language={language} />
            {/* Footer */}
            <Footer language={language} />
        </div>
    );
}

export default App;
