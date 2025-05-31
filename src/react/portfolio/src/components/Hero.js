import React from 'react';

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <p className="hero__badge">Aspiring Software Engineer 💡</p>
                <h1 className="hero__title">Hey there! I'm Wesley 👋</h1>
                <p className="hero__intro">
                    I'm deep-diving into the magical world of C and C++ 🧙‍♂️, mastering Data Structures 🧱, and cooking up
                    powerful backend services with Node.js 🍝. I love clean code, system design, and building things that
                    scale.
                </p>
                <a href="#contact" className="hero__cta cta">
                    <span>Let's connect 🤝</span>
                </a>
            </div>
        </section>
    );
};

export default Hero;
