import React, { useEffect, useState } from 'react';
import './nav.css';

const sectionIds = ['#', '#about', '#skills', '#project', '#contact'];

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            let found = '#';
            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const id = sectionIds[i] === '#' ? 'header' : sectionIds[i].replace('#', '');
                const el = document.getElementById(id);
                if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY;
                    if (scrollY + 80 >= top) { // 80px offset for nav height
                        found = sectionIds[i];
                        break;
                    }
                }
            }
            setActiveNav(found);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // set on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav>
            <div className="nav-links">
                <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a>
                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
                <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}>Skills</a>
                <a href="#project" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}>Projects</a>
                <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a>
            </div>
        </nav>
    )
}

export default Nav;
