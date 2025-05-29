import React from 'react';
import projects from '../data/projects';

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <h2 className="section__title">🚀 Projects</h2>
                <div className="projects__content content">
                    {projects.map((project, index) => (
                        <article className="projects__item" key={index}>
                            <h3 className="projects__title">{project.icon} {project.title}</h3>
                            <p>{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on GitHub
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
