// src/components/Skills.js
import { useState } from 'react';

function Skills() {
  const skills = [
    "C", "C++", "Python", "Java", "C#", "JavaScript",
    "React", "MATLAB", "HTML/CSS", "MySQL", "WordPress"
  ];
  const [filter, setFilter] = useState('');

  const filteredSkills = skills.filter(s => s.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="skills" className="fade-in">
      <h2>Technical Skills</h2>
      <input
        type="text"
        placeholder="Filter skills..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
        className="form-control mb-3"
        
      />
      {filteredSkills.map(s => (
        <span key={s} className="badge">{s}</span>
      ))}
    </section>
  );
}

export default Skills;
