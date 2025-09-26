import { useState } from 'react';
import './Skills.css';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const skillsData = {
    languages: [
      { name: 'C', level: 70, years: 4 },
      { name: 'C++', level: 65, years: 3 },
      { name: 'Python', level: 60, years: 3 },
      { name: 'Java', level: 65, years: 2 },
      { name: 'JavaScript', level: 55, years: 3 },
      { name: 'C#', level: 70, years: 1 }
    ],
    frontend: [
      { name: 'React', level: 65, years: 2 },
      { name: 'HTML/CSS', level: 90, years: 4 },
      { name: 'Bootstrap', level: 80, years: 2 },
      { name: 'jQuery', level: 65, years: 2 }
    ],
    backend: [
      { name: 'PHP', level: 80, years: 2 },
      { name: 'MySQL', level: 85, years: 3 },
      { name: 'Node.js', level: 70, years: 1 }
    ],
    tools: [
      { name: 'Git', level: 80, years: 3 },
      { name: 'MATLAB', level: 75, years: 2 },
      { name: 'WordPress', level: 70, years: 2 },
      { name: 'VS Code', level: 90, years: 4 }
    ]
  };

  const categories = [
    { key: 'all', label: 'All Skills', icon: '⭐' },
    { key: 'languages', label: 'Languages', icon: '💻' },
    { key: 'frontend', label: 'Frontend', icon: '🎨' },
    { key: 'backend', label: 'Backend', icon: '⚙️' },
    { key: 'tools', label: 'Tools', icon: '🛠️' }
  ];

  const allSkills = Object.values(skillsData).flat();
  
  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : skillsData[activeCategory];

  const searchedSkills = filteredSkills.filter(skill =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getProgressColor = (level) => {
    if (level >= 85) return '#00d26a';
    if (level >= 70) return '#ffb224';
    return '#ff4d4d';
  };

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2>Technical Skills</h2>
        <p>Technologies and tools I work with</p>
      </div>

      <div className="skills-container">
        <div className="skills-search">
          <div className="search-box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" fill="currentColor"/>
            </svg>
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="clear-search"
                aria-label="Clear search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="currentColor"/>
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="skills-categories">
          {categories.map(category => (
            <button
              key={category.key}
              className={`category-btn ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.key)}
            >
              <span className="category-icon">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {searchedSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span className="skill-years">{skill.years}+ years</span>
              </div>
              
              <div className="skill-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${skill.level}%`,
                      backgroundColor: getProgressColor(skill.level)
                    }}
                  ></div>
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>

              <div className="skill-meta">
                <div className="skill-experience">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" fill="currentColor"/>
                  </svg>
                  {skill.years} years experience
                </div>
                
                <div className="skill-proficiency">
                  {skill.level >= 85 && 'Expert'}
                  {skill.level >= 70 && skill.level < 85 && 'Advanced'}
                  {skill.level < 70 && 'Intermediate'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {searchedSkills.length === 0 && (
          <div className="no-skills">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" fill="currentColor"/>
            </svg>
            <p>No skills found matching "{searchTerm}"</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="btn"
            >
              Clear Search
            </button>
          </div>
        )}

        <div className="skills-legend">
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#00d26a' }}></div>
            <span>Expert (85-100%)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#ffb224' }}></div>
            <span>Advanced (70-84%)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#ff4d4d' }}></div>
            <span>Intermediate (Below 70%)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;