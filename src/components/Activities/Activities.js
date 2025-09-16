import { useState } from 'react';
import './Activities.css';

function Activities() {
  const [expandedItems, setExpandedItems] = useState({});

  const activitiesData = [
    {
      title: "KeyGEnCoders",
      role: "Core Member",
      period: "Aug 2024 – Present",
      description: "Active member of KGEC's competitive programming community",
      details: [
        "Mentored freshmen in data structures and algorithms",
        "Organized and coordinated coding contests and workshops",
        "Contributed to problem setting and testing for internal competitions",
        "Helped organize inter-college programming events"
      ],
      skills: ["Teaching", "Event Management", "Problem Solving", "Leadership"]
    },
    {
      title: "National Service Scheme (NSS)",
      role: "Active Volunteer",
      period: "Jan 2022 – Jun 2024",
      description: "Participated in social service and community development activities",
      details: [
        "Organized rural outreach programs and community service initiatives",
        "Coordinated Yuva Samvad 2024 - youth dialogue event",
        "Participated in environmental conservation drives",
        "Contributed to blood donation camps and health awareness campaigns"
      ],
      skills: ["Community Service", "Event Coordination", "Teamwork", "Social Work"]
    },
    {
      title: "KGEC TechTix 2025",
      role: "Event Coordinator",
      period: "2025",
      description: "Technical fest event coordination and management",
      details: [
        "Managed technical events and competitions",
        "Coordinated with participants and judges",
        "Handled event logistics and scheduling",
        "Ensured smooth execution of technical challenges"
      ],
      skills: ["Event Management", "Coordination", "Logistics", "Leadership"]
    },
    {
      title: "SOF International Mathematics Olympiad",
      role: "Zonal Excellence",
      period: "2016",
      description: "Achieved excellence in international mathematics competition",
      details: [
        "Secured Rank 21 in zonal level competition",
        "Received Medal of Excellence for outstanding performance",
        "Demonstrated strong mathematical problem-solving skills",
        "Represented school at zonal level mathematics olympiad"
      ],
      skills: ["Mathematics", "Problem Solving", "Analytical Thinking", "Competitive Spirit"]
    }
  ];

  const toggleItem = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="activities" className="activities">
      <div className="section-header">
        <h2>Leadership & Activities</h2>
        <p>Positions of responsibility and extracurricular involvement</p>
      </div>

      <div className="activities-container">
        <div className="activities-timeline">
          {activitiesData.map((activity, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index < activitiesData.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <div className="timeline-content">
                <div className="activity-card">
                  <div className="activity-header">
                    <div className="activity-info">
                      <h3>{activity.title}</h3>
                      <p className="activity-role">{activity.role}</p>
                      <p className="activity-period">{activity.period}</p>
                    </div>
                    <button
                      className={`expand-btn ${expandedItems[index] ? 'expanded' : ''}`}
                      onClick={() => toggleItem(index)}
                      aria-expanded={expandedItems[index]}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="currentColor"/>
                      </svg>
                    </button>
                  </div>

                  <p className="activity-description">{activity.description}</p>

                  {expandedItems[index] && (
                    <div className="activity-details">
                      <h4>Key Responsibilities & Achievements:</h4>
                      <ul>
                        {activity.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>

                      <div className="activity-skills">
                        <h4>Skills Developed:</h4>
                        <div className="skills-tags">
                          {activity.skills.map((skill, idx) => (
                            <span key={idx} className="skill-tag">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="activities-stats">
          <div className="stat-card">
            <div className="stat-number">4+</div>
            <div className="stat-label">Years in Extracurriculars</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">3+</div>
            <div className="stat-label">Events Organized</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100+</div>
            <div className="stat-label">Students Mentored</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">3</div>
            <div className="stat-label">Leadership Roles</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Activities;