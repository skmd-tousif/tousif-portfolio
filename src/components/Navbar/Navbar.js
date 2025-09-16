import { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

function Navbar({ toggleTheme, darkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link 
          to="#about" 
          className="nav-logo"
          onClick={handleLinkClick}
        >
          <span>T</span>ousif
        </Link>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link 
            to="#about" 
            className="nav-link"
            onClick={handleLinkClick}
            smooth
          >
            About
          </Link>
          <Link 
            to="#academics" 
            className="nav-link"
            onClick={handleLinkClick}
            smooth
          >
            Academics
          </Link>
          <Link 
            to="#achievements" 
            className="nav-link"
            onClick={handleLinkClick}
            smooth
          >
            Achievements
          </Link>
          <Link 
            to="#projects" 
            className="nav-link"
            onClick={handleLinkClick}
            smooth
          >
            Projects
          </Link>
          <Link 
            to="#skills" 
            className="nav-link"
            onClick={handleLinkClick}
            smooth
          >
            Skills
          </Link>
          <Link 
            to="#activities" 
            className="nav-link"
            onClick={handleLinkClick}
            smooth
          >
            Activities
          </Link>
          <Link 
            to="#contact" 
            className="nav-link"
            onClick={handleLinkClick}
            smooth
          >
            Contact
          </Link>
        </div>
        
        <div className="nav-extra">
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <span>☀️</span>
            ) : (
              <span>🌙</span>
            )}
          </button>
          
          <div 
            className={`nav-hamburger ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;