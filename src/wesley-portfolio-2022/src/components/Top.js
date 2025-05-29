import React, { useEffect, useState } from 'react';

const Top = () => {
    const [visible, setVisible] = useState(false);
    const SCROLL_THRESHOLD = 300;

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > SCROLL_THRESHOLD);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`to-top ${visible ? 'to-top--visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            ⬆️ Top
        </button>
    );
};

export default Top;
