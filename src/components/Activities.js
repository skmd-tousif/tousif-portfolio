// src/components/Activities.js
import { Accordion } from 'react-bootstrap';

function Activities() {
  return (
    <section id="activities" className="fade-in">
      <h2>Positions of Responsibility & Extra-Curriculars</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>View Activities</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Member, KeyGEnCoders (Aug 2024 – Present) – mentored freshmen, arranged coding contests.</li>
              <li>Member, NSS KGEC (Jan 2022 – Jun 2024) – organised rural outreach & Yuva Samvad 2024.</li>
              <li>Event coordinator for KGEC TechTix 2025.</li>
              <li>Zonal Medal of Excellence – SOF IMO 2016 (Rank 21).</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}

export default Activities;
