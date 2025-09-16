import { useState } from 'react';
import './Academics.css';

function Academics() {
  const [expanded, setExpanded] = useState(false);

  const academicData = [
    {
      year: '2022 – Present',
      degree: 'B.Tech Computer Science & Engineering',
      institute: 'Kalyani Government Engineering College',
      score: '8.15/10 CGPA',
      details: 'Currently pursuing Bachelor of Technology with focus on algorithms, data structures, and web technologies.'
    },
    {
      year: '2022',
      degree: 'CBSE Class XII',
      institute: 'Arambagh Vivekananda Academy',
      score: '94.6%',
      details: 'Science Stream .'
    },
    {
      year: '2020',
      degree: 'CBSE Class X',
      institute: 'Arambagh Vivekananda Academy',
      score: '92.4%',
      details: 'Foundation studies with excellent academic performance.'
    }
  ];

  return (
    <section id="academics" className="academics">
      <div className="section-header">
        <h2>Academic Qualifications</h2>
        <p>My educational journey and achievements</p>
      </div>
      
      <div className="academics-container">
        <button 
          className="toggle-btn" 
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? (
            <>
              <span>Collapse Details</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z" fill="currentColor"/>
              </svg>
            </>
          ) : (
            <>
              <span>Expand Details</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="currentColor"/>
              </svg>
            </>
          )}
        </button>

        {expanded && (
          <div className="academics-content">
            <div className="timeline">
              {academicData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    {index < academicData.length - 1 && <div className="timeline-line"></div>}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>{item.degree}</h3>
                      <span className="timeline-year">{item.year}</span>
                    </div>
                    <p className="timeline-institute">{item.institute}</p>
                    <div className="timeline-score">
                      <span className="score-badge">{item.score}</span>
                    </div>
                    <p className="timeline-details">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="academics-table">
              <h3>Summary</h3>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Degree / Exam</th>
                      <th>Institute</th>
                      <th>CGPA / %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {academicData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.year}</td>
                        <td>{item.degree}</td>
                        <td>{item.institute}</td>
                        <td><strong>{item.score}</strong></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Academics;