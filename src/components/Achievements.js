// src/components/Achievements.js
import { Accordion } from 'react-bootstrap';

function Achievements() {
  return (
    <section id="achievements" className="fade-in">
      <h2>Scholastic & Competitive Programming Achievements</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>View Achievements</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Global Rank 40 – Codeforces Round 1043 (Div.3)</li>
              <li>GATE 2025 – AIR 8003 &middot; Score 481/1000</li>
              <li>Smart India Hackathon 2024 – Finalist</li>
              <li>WBJEE 2022 – State Rank 3027 / 80,000+</li>
              <li>Peak Codeforces rating 1503 (handle sm_tousif21)</li>
              <li>Global Rank 4,518 – Codeforces Round 988 (Div.3)</li>
              <li>Global Rank 674 – TCS CodeVita Season 12</li>
              <li>100+ problems solved across Codeforces & CodeChef</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}

export default Achievements;
