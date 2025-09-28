import { useState } from 'react';
import './Projects.css';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsData = [
    {
      title: 'Client Management Portal',
      description: 'Self-built PHP + MySQL admin dashboard for freelancers and clients with comprehensive project tracking and invoice generation capabilities.',
      features: [
        'CRUD operations for user profiles and project tracking',
        'CSV bulk import/export reduced manual entry by 70%',
        'jQuery/AJAX for live validation, search, and pagination',
        'Invoice generation and management system',
        'Preview is Unavailable as it is a private project Made for PACE assighnments as a part of my freelancing work'
      ],
      technologies: ['PHP', 'MySQL', 'jQuery', 'JavaScript', 'HTML/CSS', 'Bootstrap'],
      category: 'fullstack',
      github: 'https://github.com/skmd-tousif/admin_portal',
      demo: '#',
      image: `${process.env.PUBLIC_URL}/images/project-crm.png`
    },
    {
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio website built with React.js featuring smooth animations and dark/light mode toggle.',
      features: [
        'Responsive design for all device sizes',
        'Dark/light mode theme switching',
        'Smooth animations and transitions',
        'Contact form with email integration'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'EmailJS'],
      category: 'frontend',
      github: 'https://github.com/skmd-tousif/tousif-portfolio',
      demo: 'https://skmd-tousif.github.io/tousif-portfolio/',
      image: `${process.env.PUBLIC_URL}/images/project-portfolio.png`
    },
    {
  title: 'Todo App with Firebase',
  description: 'A full-stack todo application with user authentication, real-time data sync, and advanced task management features. Includes guest mode and verified user accounts with email verification.',
  features: [
    'User authentication with email/password',
    'Email verification system with auto-delete protection',
    'Real-time data synchronization with Firebase',
    'Advanced task management with due dates and times',
    'Task filtering (all, approaching, overdue, completed, no due date)',
    'Guest mode for trying without registration',
    'Responsive design for all devices',
    'Account management (delete account, logout)'
  ],
  technologies: ['React', 'Vite', 'Firebase Auth', 'Firestore', 'JavaScript', 'CSS3', 'HTML5'],
  category: 'fullstack',
  github: 'https://github.com/skmd-tousif/todo-app',
  demo: 'https://skmd-tousif.github.io/todo-app',
  image: `${process.env.PUBLIC_URL}/images/project-todo-app.png`
}
    
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <p>Some of my recent work and personal projects</p>
      </div>

      <div className="projects-container">
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    {project.demo !== '#' && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="action-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                          <path fill="none" d="M0 0h24v24H0z"/>
                          <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z" fill="currentColor"/>
                        </svg>
                        Live Demo
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" fill="currentColor"/>
                      </svg>
                      Code
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Interested in seeing more of my work?</p>
          <a href="https://github.com/skmd-tousif" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;