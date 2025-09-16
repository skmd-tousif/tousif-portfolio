// src/components/Academics.js
import { useState } from 'react';

function Academics() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="academics" className="fade-in">
      <h2>Academic Qualifications</h2>
      <button className="btn mb-3" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Collapse' : 'Expand Details'}
      </button>
      {expanded && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Year</th>
              <th>Degree / Exam</th>
              <th>Institute</th>
              <th>CGPA / %</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>2022 – Present</td><td>B.Tech CSE</td><td>Kalyani Government Engineering College</td><td>8.15/10</td></tr>
            <tr><td>2022</td><td>CBSE XII</td><td>Arambagh Vivekananda Academy</td><td>94.6%</td></tr>
            <tr><td>2020</td><td>CBSE X</td><td>Arambagh Vivekananda Academy</td><td>92.4%</td></tr>
          </tbody>
        </table>
      )}
    </section>
  );
}

export default Academics;
