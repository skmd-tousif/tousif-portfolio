import { useState } from 'react';
import './Achievements.css';

function Achievements() {
  const [activeTab, setActiveTab] = useState('programming');

  const achievementsData = {
    programming: [
      {
        title: 'Global Rank 40',
        event: 'Codeforces Round 1043 (Div.3)',
        date: '2024',
        description: 'Achieved global rank 40 out of thousands of participants in competitive programming contest.'
      },
      {
        title: 'Peak Codeforces Rating',
        event: 'Competitive Programming',
        date: '2024',
        description: 'Reached peak rating of 1503 (Specialist) on Codeforces platform.'
      },
      {
        title: 'Global Rank 4,518',
        event: 'Codeforces Round 988 (Div.3)',
        date: '2024',
        description: 'Secured position in top 5,000 globally in competitive programming competition.'
      },
      {
        title: 'Global Rank 674',
        event: 'TCS CodeVita Season 12',
        date: '2023',
        description: 'Ranked 674 globally in prestigious TCS CodeVita programming competition.'
      }
    ],
    academic: [
      {
        title: 'GATE 2025',
        event: 'Graduate Aptitude Test in Engineering',
        date: '2025',
        description: 'AIR 8003 with score 481/1000 in Computer Science and Information Technology'
      },
      {
        title: 'Smart India Hackathon 2024',
        event: 'National Level Hackathon',
        date: '2024',
        description: 'Finalist in national level hardware/software innovation competition'
      },
      {
        title: 'WBJEE 2022',
        event: 'West Bengal Joint Entrance Examination',
        date: '2022',
        description: 'State Rank 3027 among 80,000+ engineering aspirants'
      },
      {
        title: 'SOF International Mathematics Olympiad',
        event: 'International Olympiad',
        date: '2016',
        description: 'Zonal Medal of Excellence - Rank 21 in international mathematics competition'
      }
    ]
  };

  return (
    <section id="achievements" className="achievements">
      <div className="section-header">
        <h2>Achievements & Awards</h2>
        <p>My accomplishments in programming and academics</p>
      </div>

      <div className="achievements-container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'programming' ? 'active' : ''}`}
            onClick={() => setActiveTab('programming')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12z" fill="currentColor"/>
            </svg>
            Competitive Programming
          </button>
          <button 
            className={`tab ${activeTab === 'academic' ? 'active' : ''}`}
            onClick={() => setActiveTab('academic')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M12 2l4 4h-3v7.85l6.53 3.76L21 15.03l1.5 5.47-5.5 1.46 1.53-2.61L12 15.58l-6.53 3.77L7 21.96 1.5 20.5 3 15.03l1.47 2.58L11 13.85V6H8l4-4z" fill="currentColor"/>
            </svg>
            Academic & Scholastic
          </button>
        </div>

        <div className="achievements-content">
          <div className="achievements-grid">
            {achievementsData[activeTab].map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-header">
                  <h3>{achievement.title}</h3>
                  <span className="achievement-date">{achievement.date}</span>
                </div>
                <div className="achievement-event">{achievement.event}</div>
                <p className="achievement-description">{achievement.description}</p>
                <div className="achievement-badge">
                  {activeTab === 'programming' ? '🏆 Programming' : '📚 Academic'}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">1503</div>
            <div className="stat-label">Codeforces Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Problems Solved</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">#40</div>
            <div className="stat-label">Best Global Rank</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">#3027</div>
            <div className="stat-label">WBJEE Rank</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;