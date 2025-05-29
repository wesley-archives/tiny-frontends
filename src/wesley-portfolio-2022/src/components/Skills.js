import React from 'react';

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <h2 className="section__title">🔧 Skills</h2>
                <div className="skills__content content">
                    <div className="skills__block">
                        <h3 className="skills__title">💻 Languages & Tools</h3>
                        <p>C, C++, Node.js, JavaScript, Git, Bash, REST APIs, JSON</p>
                    </div>
                    <div className="skills__block">
                        <h3 className="skills__title">📚 Learning Focus</h3>
                        <p>Systems programming, data structures, backend architecture, databases, and testing.</p>
                    </div>
                    <div className="skills__block">
                        <h3 className="skills__title">🎯 Interests</h3>
                        <p>Building CLI tools 🖥️, writing clean algorithms ✍️, and contributing to open source projects 🌍.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
