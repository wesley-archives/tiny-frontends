import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
