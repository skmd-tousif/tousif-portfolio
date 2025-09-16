// App.js (unchanged from previous correction - this renders all sections on a single page)
import { useState, useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Loader from './components/Loader/Loader';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// Lazy load components for better performance
const AboutMe = lazy(() => import('./components/AboutMe/AboutMe'));
const Academics = lazy(() => import('./components/Academics/Academics'));
const Achievements = lazy(() => import('./components/Achievements/Achievements'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Activities = lazy(() => import('./components/Activities/Activities'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Sync body class with darkMode state
  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
  }, [darkMode]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <Suspense fallback={<Loader />}>
        <AboutMe />
        <Academics />
        <Achievements />
        <Projects />
        <Skills />
        <Activities />
        <Contact />
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
