import React, { useState } from 'react';
import './Skills.css';
import { skillsData } from '../data';
import { FaCode, FaLightbulb, FaLanguage, FaRunning, FaDatabase } from 'react-icons/fa';
import './styles.css';
import { trad } from '../data';

const iconMap = {
    'Competenze Tecniche (Hard Skills)': <FaCode />,
    'Technical Skills (Hard Skills)': <FaCode />,
    '技術的スキル (ハードスキル)': <FaCode />,
    'Competenze Trasversali (Soft Skills)': <FaLightbulb />,
    'Soft Skills': <FaLightbulb />,
    'ソフトスキル': <FaLightbulb />,
    'Competenze di Dominio': <FaDatabase />,
    'Domain Expertise': <FaDatabase />,
    'ドメインの専門知識': <FaDatabase />,
    'Competenze Linguistiche': <FaLanguage />,
    'Language Skills': <FaLanguage />,
    '言語スキル': <FaLanguage />,
    'Sport': <FaRunning />,
    'Sports': <FaRunning />,
    'スポーツ': <FaRunning />,
};

const Skills = ({ language }) => {
    const [expanded, setExpanded] = useState(null);
    const currentSkillsData = skillsData[language] || [];
    const title = trad[language]?.skillsTitle || 'Skills';

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <section className="skills-section">
            <h2 className="skills-title">{title}</h2>
            <div className="skills-container">
                {currentSkillsData.map((section, index) => (
                    <div
                        key={index}
                        className={`skills-category ${expanded === index ? 'expanded' : ''}`}
                        onClick={() => toggleExpand(index)}
                    >
                        <div className="category-header">
                            <div className="icon">{iconMap[section.category]}</div>
                            <h3 className="category-title">{section.category}</h3>
                        </div>
                        <div className="skills-content">
                            {expanded === index && (
                                <ul className="skills-list">
                                    {section.skills.map((skill, idx) => (
                                        <li key={idx} className="skill-item">
                                            <span className="skill-name">{skill.name}</span>
                                            {skill.level && <span className="skill-level">{skill.level}</span>}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
