import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { portfolioData, trad1 } from '../data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Portfolio.css';
import './styles.css';

const Portfolio = ({ language }) => {
    const [filteredData, setFilteredData] = useState(portfolioData);
    const [selectedTags, setSelectedTags] = useState([]);
    const title = trad1[language]?.skillsTitle || 'Portfolio';

    useEffect(() => {
        if (selectedTags.length > 0) {
            setFilteredData(
                portfolioData.filter((project) =>
                    selectedTags.every((tag) => project.tags.includes(tag))
                )
            );
        } else {
            setFilteredData(portfolioData);
        }
    }, [selectedTags]);

    const handleTagClick = (tag) => {
        setSelectedTags((prevTags) =>
            prevTags.includes(tag)
                ? prevTags.filter((t) => t !== tag)
                : [...prevTags, tag]
        );
    };

    const settings = {
        dots: true,
        infinite: filteredData.length > 1,
        speed: 500,
        slidesToShow: Math.min(filteredData.length, 3),
        slidesToScroll: 1,
        autoplay: filteredData.length > 1,
        autoplaySpeed: 4000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(filteredData.length, 2),
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: Math.min(filteredData.length, 1),
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const tags = [...new Set(portfolioData.flatMap((project) => project.tags))];

    return (
        <section className="portfolio-section">
            <h2 className="portfolio-title">{title}</h2>
            <div className="separator"></div>

            <div className="tag-filter">
                {tags.map((tag) => (
                    <button
                        key={tag}
                        className={`tag-button ${selectedTags.includes(tag) ? 'active' : ''}`}
                        onClick={() => handleTagClick(tag)}
                    >
                        {tag}
                    </button>
                ))}
                <button
                    className={`tag-button ${selectedTags.length === 0 ? 'active' : ''}`}
                    onClick={() => setSelectedTags([])}
                >
                    All
                </button>
            </div>

            {filteredData.length === 0 ? (
                <div className="portfolio-empty">
                    <p>No projects available at the moment.</p>
                    <img src="path/to/empty-state-image.png" alt="No projects" className="empty-state-image" />
                </div>
            ) : (
                <Slider {...settings} className="portfolio-slider">
                    {filteredData.map((project, index) => (
                        <div key={index} className="portfolio-item">
                            <div className="portfolio-image-container">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="portfolio-image"
                                />
                            </div>
                            <div className="portfolio-details">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="description-wrapper">
                                    <p className="project-description">
                                        {project.description[language]}
                                    </p>
                                </div>
                                <div className="project-links">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        View Project
                                    </a>
                                    <a
                                        href={project.documentation}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-doc"
                                    >
                                        Documentation
                                    </a>
                                </div>
                                <div className="project-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="project-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </section>
    );
};

export default Portfolio;
