// src/components/Navbar.js
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';  // Updated import

function Navbar({ toggleTheme, darkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#about">Tousif Portfolio</Link>
        <button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="#about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#academics">Academics</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#achievements">Achievements</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#projects">Projects</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#skills">Skills</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#activities">Activities</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#contact">Contact</Link></li>
          </ul>
          <button className="btn btn-outline-light" onClick={toggleTheme}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
