import React, { useEffect, useState } from 'react';
import './nav.css';
import { FiMenu, FiX } from 'react-icons/fi';

const sectionIds = ['#', '#about', '#skills', '#experience', '#project', '#contact'];

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    const [menuOpen, setMenuOpen] = useState(false);

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

    const handleNavClick = (id) => {
        setActiveNav(id);
        setMenuOpen(false);
    };

    return (
        <nav>
            <div className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </div>
            <div className={`nav-links${menuOpen ? ' open' : ''}`}>
                <a href="#" onClick={() => handleNavClick('#')} className={activeNav === '#' ? 'active' : ''}>Home</a>
                <a href="#about" onClick={() => handleNavClick('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
                <a href="#skills" onClick={() => handleNavClick('#skills')} className={activeNav === '#skills' ? 'active' : ''}>Skills</a>
                <a href="#experience" onClick={() => handleNavClick('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Career Journey</a>
                <a href="#project" onClick={() => handleNavClick('#project')} className={activeNav === '#project' ? 'active' : ''}>Projects</a>
                <a href="#contact" onClick={() => handleNavClick('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a>
            </div>
            {menuOpen && <div className="nav-backdrop" onClick={() => setMenuOpen(false)}></div>}
        </nav>
    )
}

export default Nav;
