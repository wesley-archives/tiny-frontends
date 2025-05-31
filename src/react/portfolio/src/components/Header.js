import React from 'react';
import { Link } from 'react-router-dom';
import Theme from './Theme';

const Header = () => {
    return (
        <header id='header'>
            <nav className="nav">
                <div className="container nav__container">
                    <Link to="/" className="nav__logo"><strong>Wesley Bertipaglia 🚀</strong></Link>
                    <ul className="nav__menu">
                        <li className="nav__item"><Link to="#skills" className="nav__link">🛠️ Skills</Link></li>
                        <li className="nav__item"><Link to="#projects" className="nav__link">📂 Projects</Link></li>
                        <li className="nav__item"><Link to="#education" className="nav__link">🎓 Education</Link></li>
                        <Theme />
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
