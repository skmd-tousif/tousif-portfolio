// src/components/AboutMe.js
import { useEffect, useState } from 'react';

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <section id="about" className={`fade-in ${isVisible ? 'visible' : ''}`}>
     <img 
  src={`${process.env.PUBLIC_URL}/images/profile.png`} 
  alt="Profile" 
  className="rounded-circle mb-3" 
  style={{ width: '150px', boxShadow: '0 0 15px var(--primary)' }} 
/>

      <p>
        Email: <a href="mailto:skmdtousif172@gmail.com">skmdtousif172@gmail.com</a> &middot; Phone: +91-7908319931
      </p>
      <p>Languages: English &middot; Bengali &middot; Hindi (fluent)</p>
      <a 
  href={`${process.env.PUBLIC_URL}/CV.pdf`} 
  download 
  className="btn"
>
  Download CV
</a>

    </section>
  );
}

export default AboutMe;
