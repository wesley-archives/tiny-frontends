import React from 'react';
import educationData from '../data/education';

const Education = () => {
    return (
        <section id="education">
            <div className="container">
                <h2 className="section__title">📘 Education</h2>
                <div className="education__content content">
                    {educationData.map((edu, index) => (
                        <div className="education__item" key={index}>
                            <h3 className="education__title">{edu.icon} {edu.title}</h3>
                            <p>{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
